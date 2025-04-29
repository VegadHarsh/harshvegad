import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Notfound() {
    useEffect(() => {
            document.querySelectorAll(".set-bg[data-setbg]").forEach((element) => {
                const bg = element.getAttribute("data-setbg");
                if (bg) {
                    element.style.backgroundImage = `url(${bg})`;
                }
            });
        }, []);
    return (
        <>
            <div className="set-bg not_found_page" data-setbg="/img/hero/i2.jpg">
                <div className='page-404-text text-white text-center'>
                    <div className='d-flex justify-center'>
                        <img className='image_not_found' src="/img/Notfound/Not_found.png"></img>
                    </div>
                    <h1>404 Page Not Found</h1>
                    <p className='m-0'>The page you are looking for doesn't exist.</p>
                </div>
            </div>
        </>
    )
}

export default Notfound
