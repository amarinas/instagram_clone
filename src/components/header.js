import React, { useContext } from 'react';
import Logo from '../images/logo.png'
import FirebaseContext from '../context/firebase'
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';



export default function Header() {
    const { firebase } = useContext(FirebaseContext);
    const user = {
        displayName: "karl"
    };
    
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
                    <div className="text-gray text-center flex items-center align-items">
                        {user ? (
                            <>
                                <Link to={ROUTES.DASHBOARD} aria-label="Home">
                                    <p>Dashboard</p>
                                </Link>
                                <button 
                                    type="button"
                                    className="Sign Out"
                                    onClick={() => firebase.auth().signOut()}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter'){
                                            firebase.auth().signOut();
                                        }
                                    }}
                                >
                                    Sign Out
                                </button>
                                <div className="flex items-center cursor-pointer">
                                    <Link to={`/p/${user.displayName}`}>
                                        <img
                                            className="rounded-full h-8 w-8 flex"
                                            src={`{/images/avatars/}${user.displayName}.jpg`}
                                            alt={`${user.displayName} profile pic`}
                                        />
                                    </Link>
                                </div>
                            </>
                        ) : (

                            
                            <>
                                <Link to={ROUTES.LOGIN}>
                                    <button 
                                        type="button"
                                        className="bg-blue font-bold text-sm rounded text-white w-20 h-8">
                                        Log In
                                    </button>
                                </Link>
                                <Link to={ROUTES.SIGN_UP}>
                                    <button 
                                        type="button"
                                        className="font-bold text-sm rounded text-blue w-20 h-8">
                                            Sign Up
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>

        </header>
        
    
    
    )
}