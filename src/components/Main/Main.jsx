import React from 'react'
import './Main.css'
import Navbar from '../Navbar/Navbar'
import Eth from '../../assets/img/eth.png'
import User1 from '../../assets/img/user1.png'
function Main() {
  return (
    <div className='main-page'>
      <Navbar />
      <div className="main-content">
        <div className="main-text">
          <h1>The Home of
            Minimalist Buying
            and Selling
          </h1>
          <p>This NFT website is a website that features buying and selling, news and blogs. Designed with a minimalist and informative concept</p>
          <div className="main-buttons">
            <button className='explore-btn'>Explore</button>
            <button className='create-btn'>Create</button>
          </div>
        </div>
        <div className="current-price">
          <h2>Current price</h2>
          <div className="eth-price">
            <img src={Eth} alt="img" />
            <span>1.98</span>
            <p>($5,822.47)</p>
          </div>
          <div className="user1">
            <img src={User1} alt="img" />
            <h3>Wade Warren</h3>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Main