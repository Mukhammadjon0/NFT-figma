import React from 'react'
import './Footer.css'
import Logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-left">
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                        <h1>NFT.Ring</h1>
                    </div>
                    <p>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital assets.</p>
                </div>
                <div className="footer-right">
                    <span>Marketplace</span>
                    <Link className='footer-link'>All NFTs</Link>
                    <Link className='footer-link'>New</Link>
                    <Link className='footer-link'>Art</Link>
                    <Link className='footer-link'>Music</Link>
                    <Link className='footer-link'>Domain Names</Link>
                    <Link className='footer-link'>Virtual Worlds</Link>
                    <Link className='footer-link'>Trading Cards</Link>
                    <Link className='footer-link'>Collectibles</Link>
                    <Link className='footer-link'>Sports</Link>
                    <Link className='footer-link'>Utility</Link>
                </div>
                <div className="footer-right">
                    <span>My Account</span>
                    <Link className='footer-link'>My Profile</Link>
                    <Link className='footer-link'>My Collections</Link>
                    <Link className='footer-link'>My Favorites</Link>
                    <Link className='footer-link'>My Account Settings</Link>
                    <Link className='footer-link'>About</Link>
                </div>
                <div className="footer-right">
                    <span>Resources</span>
                    <Link className='footer-link'>Help Center</Link>
                    <Link className='footer-link'>Partners</Link>
                    <Link className='footer-link'>Suggestions</Link>
                    <Link className='footer-link'>Discord Community</Link>
                    <Link className='footer-link'>Blog</Link>
                    <Link className='footer-link'>Docs</Link>
                    <Link className='footer-link'>Newsletter</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer