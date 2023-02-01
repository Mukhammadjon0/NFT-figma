import React from 'react'
import './Contact.css'
function Contact() {
    return (
        <div className='contact'>
            <div className="contact-info">
                <h1>Stay in the loop</h1>
                <p>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFT.Ring</p>
                <div className="form">
                    <input type="text" placeholder='Your Email Address' />
                    <button>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Contact