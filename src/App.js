import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom'
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopButtons from "./components/TopButtons"
import Inputs from "./components/Inputs"
import Navbar from './components/Navbar'
import Protected from './components/Protected';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
import { AuthContextProvider } from './context/AuthContext';
import Home from './pages/Home'
import Account from './pages/Account';
import Signin from './pages/Signin'


function App() {

  const [query, setQuery] = useState({ q: 'oakland' });
  const [units, setUnits] = useState('metric');
  const [ weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then(
        (data) => {
          setWeather(data);
        });
    };

  fetchWeather();
}, [query, units])

  const formatBackground = () => {
    if (!weather) return 'from-cyan-700 to-blue-700'
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return 'from-cyan-700 to-blue-700';

    return 'from-yellow-700 to-orange-700'; 
  }


  return (
    <div className= {`mx-auto max-h-screen-md max-w-screen-md mt-4 py-5 px-32 bg-cover bg-gradient-to-br from-cyan-700 to to-blue-700 h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>

    <AuthContextProvider>
  
      <Navbar />
      <Routes>
          <Route path = '/' element ={<Home/>} />
          <Route path = '/Signin' element ={<Signin />} />
          <Route path = '/Account' element ={<Protected><Account/></Protected>} />
      
        </Routes>

      
      <TopButtons setQuery= {setQuery}/>
      <Inputs setQuery = {setQuery} units= {units} setUnits = {setUnits} />
      {weather && (
        <div>
      
      <TimeAndLocation weather={weather}/>
      <TemperatureAndDetails weather={weather} />

      <Forecast title="Hourly Forecast" items = {weather.hourly}/>
      <Forecast title="Daily Forecast" items = {weather.daily} />

      {/* <img className="profile-photo" src={require("./images/Portgas.D.Ace.webp")} alt={"Carlie Anglemire"}/> */}
    </div>
    )}
    </AuthContextProvider>
    </div>
    );


}





export default App;
