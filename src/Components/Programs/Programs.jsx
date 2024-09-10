import React from 'react'
import './programs.css'
import pro_1 from '../../assets/pro_1.jpg'
import pro_2 from '../../assets/pro_2.jpg'
import pro_3 from '../../assets/pro_3.jpg'
import pro_4 from '../../assets/pro_4.jpg'
import pro_5 from '../../assets/pro_5.jfif'
import pro_6 from '../../assets/pro_6.jpg'

const programs = () => {
  return (
    <div>
         <div className='programs'>
             <div className='program'>
                <img src={pro_1} alt="" />
             </div>
            <div className='program'>
                <img src={pro_2} alt="" />
            </div>
            <div className='program'>
                <img src={pro_3} alt="" />
            </div>
        </div>
        <div className='programs'>
            <div className='program'>
               <img src={pro_4} alt="" />
            </div>
            <div className='program'>
               <img src={pro_5} alt="" />
            </div>
            <div className='program'>
               <img src={pro_6} alt="" />
            </div>
    </div>
    </div>
 
  )
}

export default programs