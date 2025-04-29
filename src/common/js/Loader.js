import React, { useState } from 'react'
import { useEffect } from 'react';

function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false); 
        }, 1000);
    }, []);

    return (
        <div id="preloder"
            style={{
                opacity: isLoading ? 1 : 0,
                pointerEvents: isLoading ? 'auto' : 'none',
                transition: 'opacity 0.5s ease',
            }}>
            <div className="loader"></div>
        </div>
    )
}

export default Loader;
