import React from 'react'
import './Side2.css'
import RingCard from './RingCard'
import Ring1 from '../../assets/img/ring1.png'
import Ring2 from '../../assets/img/ring2.png'
import Ring3 from '../../assets/img/ring3.png'
import Ring4 from '../../assets/img/ring4.png'

const rings = [
    { img: Ring1, title: 'Green Ring', id: 1 },
    { img: Ring2, title: 'Red Ring', id: 2 },
    { img: Ring3, title: 'Purple Ring', id: 3 },
    { img: Ring4, title: 'Blue Ring', id: 4 },
]


function Side2() {
    return (
        <div className='side-2'>
            <div className="side-2-head">
                <h1>New Generation of
                    Online Shopping</h1>
            </div>
            <div className="side2-head">
                <p>This NFT website is a website that features buying and selling, news and blogs. Designed with a minimalist and informative concept</p>
            </div>
            <div className="rings">
                {rings.map(item => <RingCard key={item.id} {...item} />)}

            </div>
        </div>
    )
}

export default Side2