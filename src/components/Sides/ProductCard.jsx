import React from 'react'
import './Side3.css'
import Eth2 from '../../assets/img/eth2.png'

function ProductCard({ image, title, price, ownerImg, ownerName }) {
    return (
        <div className='product'>
            <img src={image} alt="img" />
            <div className="prod-info">
                <h3>{title}</h3>
                <div className="prod-price">
                    <img src={Eth2} alt="icon" />
                    <span>${price}</span>
                </div>
                <div className="owner-info">
                    <img src={ownerImg} alt="img" />
                    <h3>{ownerName}</h3>
                </div>
            </div>
        </div>
    )
}

export default ProductCard