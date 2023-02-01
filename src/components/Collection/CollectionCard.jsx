import React from 'react'
import './Collection.css'
function CollectionCard({ img }) {
    return (
        <div >
            <img src={img} alt="img" />
        </div>
    )
}

export default CollectionCard