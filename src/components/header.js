import React, { useContext } from 'react';
import Logo from '../images/logo.png'
import FirebaseContext from '../context/firebase'
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';


export default function Header() {

    
    return (
    
        <header className="h-16 bg-white border-b mb-8">
            <div className="container mx-auto max-width-lg h-full">
                <div className="flex justify-between h-full">
                    <div className="text-gray-700 text-center flex items-center align-item cursor-pointer">
                        <h1 >
                            <Link to={ROUTES.DASHBOARD} aria-label="Dashboard">
                                <img src={Logo} alt="instagram logo" className="mt-2 w-6/12" />
                            </Link>
                        </h1>
                    </div>
                </div>
            </div>

        </header>
        
    
    
    )
}