import React, { useEffect } from 'react';

export default function NotFound(){

    useEffect(() => {
        document.title = '404 - Not Found';
    })

    return (
        <div className="bg-gray">
            <div className="mx-auto max-w-screen-lg">
                <p className="text-center text-2xl"> NotFound! </p>
            </div>
        </div>
        
    )
}