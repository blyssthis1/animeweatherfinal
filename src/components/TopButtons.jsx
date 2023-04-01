import React from 'react'
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';


const style ={
    bg: `h-screen w-screen p-4 bg-gradient-to-r from black to black`
}

function TopButtons({setQuery}) {

    const cities = [
        {
            id:1,
            title: 'London'
        },
        {
            id:2,
            title: 'Asmara'
        },
        {
            id:3,
            title: 'Tokyo'
        },
        {
            id:4,
            title: 'Toronto'
        },
        {
            id:5,
            title: 'Beijing'
        }
    ]

  return (
  <div className="flex items-center justify-around my-6">
    {cities.map((city) => (
        <button key= {city.id} 
        className="text-white text-lg font-medium"
        onClick={() =>setQuery({ q: city.title })}>
        
        {city.title}
        </button>

    ))}
  </div>
  );
}

const Signin =() => {

    const { googleSignIn } = UserAuth();

    const handleGoogleSignIn =async () => {
        try {
            await googleSignIn();
        }   catch (error) {
            console.log(error)
        }
    };

  return (
    <div>
        <h1 className = "flex items-center justify-around my-6">Sign In</h1>
        <div className = 'max-w-[240px] m-auto py-4'>
            <GoogleButton onClick = { handleGoogleSignIn} />
        </div>
    </div>
  )
}






export default TopButtons