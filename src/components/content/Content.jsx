import React, { useState } from 'react';
import './content.css'
import img1 from '../../images/image-product-1.jpg'
import img2 from '../../images/image-product-2.jpg'
import img3 from '../../images/image-product-3.jpg'
import img4 from '../../images/image-product-4.jpg'
import thumbimg1 from '../../images/image-product-1-thumbnail.jpg'
import thumbimg2 from '../../images/image-product-2-thumbnail.jpg'
import thumbimg3 from '../../images/image-product-3-thumbnail.jpg'
import thumbimg4 from '../../images/image-product-4-thumbnail.jpg'

function Content() {

  const [id, setId] = useState(0)
  const [count, setCount] = useState(0)
  const images = [img1, img2, img3, img4,]

  const handleImages = (e) => {
    setId(e.target.className[0])
  }

  const increaseCount = () => {
    setCount(count + 1)
  }

  const decreaseCount = () => {
    setCount(count === 0 ? 0 : count - 1)
  }

  return (
    <div className='container'>
      <div className="left-content">
        <img src={images[id]} alt="" />
        <ul className='images'>
          <li><img onClick={handleImages} className='0' src={thumbimg1} alt="" /></li>
          <li><img onClick={handleImages} className='1' src={thumbimg2} alt="" /></li>
          <li><img onClick={handleImages} className='2' src={thumbimg3} alt="" /></li>
          <li><img onClick={handleImages} className='3' src={thumbimg4} alt="" /></li>
        </ul>
      </div>

      <div className="right-content">
        <div className="right-container">
          <h3>Sneaker Company</h3>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
          <div className="price">
            <div className="promotion">
              <h2>$125.00</h2>
              <p className='reduction'>50%</p>
            </div>
            <p className='based-price'>$250.00</p>
          </div>
          <div className="buttons">
            <div className="quantities">
              <p onClick={decreaseCount}>-</p>
              <p>{count}</p>
              <p onClick={increaseCount}>+</p>
            </div>
            <button className='btn'>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
