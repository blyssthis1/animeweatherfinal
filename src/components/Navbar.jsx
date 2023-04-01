import React from 'react'
import { Link } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'

const Navbar = () => {
    const {user, logOut} = UserAuth()

    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className = 'flex justify-between bg-white-450 w-full my-6'>
            <h1 className = 'flex text-center justify-center items-center text-2x1 text-gray-200 text-3xl font-bold'>
            
                    A1 Weather
            </h1>
            {user?.displayName ? (
            <button onClick ={handleSignOut}>Logout</button> 
            ) : (
            <Link to = '/Signin'>{handleSignOut} </Link>
             
            
            
            )} 

        </div>
    );
};

export default Navbar