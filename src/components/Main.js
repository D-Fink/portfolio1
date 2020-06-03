import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return(
        <div>
            <div>
                <img className="mainImg" src="https://images.pexels.com/photos/235990/pexels-photo-235990.jpeg" alt="Gray Bridge"/>
            </div>
            <div className="shift main">
                <div>
                    <h1>Hello, I'm Danny,</h1>
                    <p>a full stack web developer with knowledge and skills<br /> in both <span>front-end and back-end</span></p>
                </div>
                <div>
                    <Link className='navLink' to='/about'>About</Link>
                    <Link className='navLink' to='/portfolio'>Portfolio</Link>
                </div>
            </div>
        </div>
    )
}

export default Main