import React, { useEffect, useState } from 'react';
import Image from "../images/iphone-with-profile.jpg";
import Logo from "../images/logo.png";
import * as ROUTES from '../constants/routes';
import {Link} from 'react-router-dom';



export default function Login(){

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const[error, setError] = useState('');
        const isInvalid = password === '' || email === '';
    
        useEffect(()=>{
            document.title = "Login - Instagram"
        }, [])
  

    return (
        
        <div class="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img src={Image} alt="PhonePhoto" />
            </div>
            <div className="flex flex-col w-2/5">
            <div className="flex flex-col items-center bg-white p-4 border mb-4">
                <h1 className= "flex justify-center w-full">
                    <img src={Logo} alt="Logo" className="mt-2 w-6/12 mb4"/>
                </h1>
                <form method="POST">
                    <input
                        aria-label="Enter your email address"
                        className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                        type="text"
                        placeholder="Email address" 
                        onChange={({ target}) => setEmail(target.value)}
                    />
                     <input
                        aria-label="Enter your password"
                        className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                        type="password"
                        placeholder="Password" 
                        onChange={({ target}) => setPassword(target.value)}
                    />
                    <button 
                        disabled={{isInvalid}}
                        type="submit"
                        className={`bg-blue-500 text-white w-full rounded h-8 font-bold
                        ${ isInvalid && ' cursor-not-allowed opacity-50'}`}
                    
                    >Login    
                    </button>
                </form>
            </div>
            <div className="flex justify-center items-center flex-col w-full bg-white p-4 border ">
                    <p className="text-sm">
                        Don's have an account?{'  '}
                        <Link to={ROUTES.SIGN_UP} className="font-bold">
                            Sign Up!
                        </Link>
                    </p>
                </div>   
            </div>
            
      </div>
    )
};




 


