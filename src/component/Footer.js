import React from 'react'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='container footer_container py-4'>
                <div className='first-row'>
                    <h3>Download our app</h3>
                    <p>Download app for Android and IOS mobile phone</p>
                    <div className="app-logo">
                        <img src="./images/app-store.png" alt='Links to download app' />
                        <img src="./images/play-store.png" alt='Links to download app' />
                    </div>
                </div>
                <div className='second-row'>
                    <img src="./images/logo.png" className='footer_logo' alt='logo' />
                    <p className='my-3'>
                        Our main motive is provide a luxury rooms with for<br /> Sale and Buy Property,Home loan for house,100% customixable<br /> room,Eco-friendly Environment,dinner in sunset
                    </p>

                </div>
                <div className='third-row'>
                    <h3>Follow us on</h3>
                    <ul className='icon_list'>
                        <a href="/"><i className="fab fa-facebook-f"></i></a>
                        <a href="/"><i className="fab fa-twitter"></i></a>
                        <a href="/"><i className="fab fa-instagram"></i></a>
                        <a href="/"><i className="fab fa-linkedin-in"></i></a>
                    </ul>
                </div>

            </div>
            {/* <hr />
            <p className="copyright text-center">
                Copyright 2020 - Easy Available
            </p> */}
        </div>
    )
}

export default Footer
