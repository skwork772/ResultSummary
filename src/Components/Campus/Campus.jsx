import React from 'react'
import './Campus.css'
import gal_1 from '../../assets/gal_1.jpg'
import gal_2 from '../../assets/gal_2.jpg'
import gal_3 from '../../assets/gal_3.jpg'
import gal_4 from '../../assets/gal_4.jpg'

const Campus = () => {
  return (
    <div className='campus'>
        <div className='gallery'>
            <img src={gal_1} alt=""/>
            <img src={gal_2} alt=""/>
            <img src={gal_3} alt=""/>
            <img src={gal_4} alt=""/>
        </div>
        <button className='btn dark-btn'>See more</button>
    </div>
  )
}

export default Campus