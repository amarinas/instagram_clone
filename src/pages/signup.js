import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import * as ROUTES from '../constants/routes'

export default function SignUp() {
    const [userName, setUserName] = useState('');
    const [fullName, setFullName] = useState('');

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');


    return (
        <div className="container flex mx-auto max-w-xs items-center h-screen">
            <div className="flex flex-col">
            <div className="flex flex-col items-center bg-white p-4 border mb-4">
                <h1 className="flex justify-center w-full">
                    <img src={Logo} alt="Instagram" className="mt-2 w-6/12 mb-4" />
                </h1>
                {error && <p className="mb-4 text-xs text-red-500">{error}</p>}
                <form>
                    <input
                        aria-label="Enter your Username"
                        className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                        type="text"
                        placeholder="Username"
                        value= {userName}
                        
                        
                    />
                    <input
                        aria-label="Enter your Full Name"
                        className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        
                    />
                    <input
                        aria-label="Enter your email address"
                        className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                        type="text"
                        placeholder="Email address"
                        value={emailAddress}
                        
                    />
                    <input
                        aria-label="Enter your password"
                        className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                        type="password"
                        placeholder="Password"
                        value={password}
                        
                    />
                    <button
                        
                        type="submit"
                        className={`bg-blue-500 text-white w-full rounded h-8 font-bold `}
                        
                    >
                        Sign Up
                    </button>
                </form>
            </div>
                <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
                    <p className="text-sm">
                        Have an account?{' '}
                        <Link to={ROUTES.LOGIN} className="font-bold">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}