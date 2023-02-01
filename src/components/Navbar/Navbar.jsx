import React from 'react'
import Logo from '../../assets/img/logo.png'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <nav>
            <div className="nav-content">
                <div className="nav-left">
                    <NavLink className={'nav-link'} to={'/'}>
                        <div className="logo">
                            <img src={Logo} alt="logo" />
                            <h1>NFT.Ring</h1>
                        </div>
                    </NavLink>
                </div>
                <div className="nav-center">
                    <NavLink className={'nav-link'}>Market</NavLink>
                    <NavLink className={'nav-link'}>Activity</NavLink>
                    <NavLink className={'nav-link'}>Feature</NavLink>
                    <NavLink className={'nav-link'}>Community</NavLink>
                </div>
                <div className="nav-right">
                    <button>Login</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar