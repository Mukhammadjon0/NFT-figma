import React from 'react'
import './Collection.css'
import CategoryImg1 from '../../assets/img/category1.png'
import CategoryImg2 from '../../assets/img/category2.png'
import CategoryImg3 from '../../assets/img/category3.png'
import CategoryImg4 from '../../assets/img/category4.png'
import CategoryImg5 from '../../assets/img/category5.png'
import CategoryImg6 from '../../assets/img/category6.png'
import CategoryImg7 from '../../assets/img/category7.png'
import CategoryImg8 from '../../assets/img/category8.png'
import CategoryImg9 from '../../assets/img/category9.png'
import CategoryImg10 from '../../assets/img/category10.png'
import CategoryImg11 from '../../assets/img/category11.png'
import CategoryImg12 from '../../assets/img/category12.png'
import CollectionCard from './CollectionCard'
function Collection() {
    const collection = [
        { img: CategoryImg1, id: 1 },
        { img: CategoryImg2, id: 2 },
        { img: CategoryImg3, id: 3 },
        { img: CategoryImg4, id: 4 },
        { img: CategoryImg5, id: 5 },
        { img: CategoryImg6, id: 6 },
        { img: CategoryImg7, id: 7 },
        { img: CategoryImg8, id: 8 },
        { img: CategoryImg9, id: 9 },
        { img: CategoryImg10, id: 10 },
        { img: CategoryImg11, id: 11 },
        { img: CategoryImg12, id: 12 },
    ]
    return (
        <div>
            <div className="collection-head">
                <h1>Browse by category</h1>
                <p>This NFT website is a website that features buying and selling, news and blogs. Designed with a minimalist and informative concept</p>
            </div>
            <div className="collection">
                {collection.map(item => <CollectionCard key={item.id} {...item} />)}

            </div>
        </div>
    )
}

export default Collection