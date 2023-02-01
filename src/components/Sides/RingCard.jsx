import React from 'react'
import './Side2.css'
function RingCard({ img, title }) {
    return (
        <div className='ring'>
            <img src={img} alt="img" />
            <h2>{title}</h2>
        </div>
    )
}

export default RingCard