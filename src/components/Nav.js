import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss'

const Nav = () => {
    return (
        <div className="navBar">
            <div>
                <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/858904_10152395176944761_820805571470488957_o.jpg?_nc_cat=110&_nc_sid=ba80b0&_nc_oc=AQlT-O9s0Z4ti4tHDKCFFtPbIs1q8HOvOacBZoP7sQ81gZMcfAHJwNjmSkyIKou1WSM&_nc_ht=scontent-sea1-1.xx&oh=49a07424f0b6a5e757a9cb7a1ad9e2c2&oe=5EFC9FAD" alt="Danny Finkelstein" />
                <p><span>Danny Finkelstein</span><br />Full-Stack Web Developer</p>
            </div>
            <nav>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/about'>About</Link>
                <Link className='link' to='/portfolio'>Artifacts</Link>
            </nav>
        </div>
    )
}

export default Nav