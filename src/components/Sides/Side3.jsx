import React from 'react'
import './Side3.css'
import Prod1 from '../../assets/img/product1.png'
import Prod2 from '../../assets/img/prod2.png'
import Prod3 from '../../assets/img/prod3.png'
import Prod4 from '../../assets/img/prod4.png'
import Prod5 from '../../assets/img/prod5.png'
import Prod6 from '../../assets/img/prod6.png'
import Prod7 from '../../assets/img/prod7.png'
import Prod8 from '../../assets/img/prod8.png'
import Owner1 from '../../assets/img/owner1.png'
import Owner2 from '../../assets/img/owner2.png'
import Owner3 from '../../assets/img/owner3.png'
import Owner4 from '../../assets/img/owner4.png'
import Owner5 from '../../assets/img/owner5.png'
import Owner6 from '../../assets/img/owner6.png'
import Owner7 from '../../assets/img/owner7.png'
import Owner8 from '../../assets/img/owner8.png'
import ProductCard from './ProductCard'

function Side3() {

    const products = [
        { image: Prod1, title: 'Theresa Webb', price: 475.22, ownerImg: Owner1, ownerName: 'Darrell Steward', id: 1 },
        { image: Prod2, title: 'Eleanor Pena', price: 710.68, ownerImg: Owner2, ownerName: 'Cody Fisher', id: 2 },
        { image: Prod3, title: 'Darlene Robertson', price: 928.41, ownerImg: Owner3, ownerName: 'Esther Howard', id: 3 },
        { image: Prod4, title: 'Bessie Cooper', price: 778.35, ownerImg: Owner4, ownerName: 'Kristin Watson', id: 4 },
        { image: Prod5, title: 'Guy Hawkins', price: 739.65, ownerImg: Owner5, ownerName: 'Marvin McKinney', id: 5 },
        { image: Prod6, title: 'Savannah Nguyen', price: 105.55, ownerImg: Owner6, ownerName: 'Savannah Nguyen', id: 6 },
        { image: Prod7, title: 'Wade Warren', price: 396.84, ownerImg: Owner7, ownerName: 'Cody Fisher', id: 7 },
        { image: Prod8, title: 'Devon Lane', price: 928.41, ownerImg: Owner8, ownerName: 'Brooklyn Simmons', id: 8 },
    ]
    return (
        <div className='side-2'>
            <div className="side-3-head">
                <h1>Exclusive NFT.Ring drops</h1>
            </div>
            <div className="side2-head">
                <p>This NFT website is a website that features buying and selling, news and blogs. Designed with a minimalist and informative concept</p>
            </div>
            <div className="products">
                {products.map(item => <ProductCard key={item.id} {...item} />)}
            </div>
        </div>
    )
}

export default Side3