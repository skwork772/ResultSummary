import React, { useRef } from 'react'
import './Testimonials.css'
import pre from '../../assets/pre.png'
import next from '../../assets/next.png'
import user_1 from '../../assets/user_1.jpg'
import user_2 from '../../assets/user_2.jpg'
import user_3 from '../../assets/user_3.jpg'
import user_4 from '../../assets/user_4.jpg'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;
    const slideForword = ()=>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackword = ()=>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='Testimonials'>
        <img src={pre} alt="" className='back-btn' onClick={slideBackword}/>
        <img src={next} alt="" className='next-btn' onClick={slideForword}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_1} alt=""/>
                            <div>
                                <h3>William Jacson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to purpose my degree at educity was one Of
                        the best decision i've ever made. The supportive
                        community, state-of-the-art facilities, and commitment
                        to academic excellence have truely exceed my 
                        expectations.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                        <img src={user_2} alt=""/>
                            <div>
                                <h3>William Jacson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to purpose my degree at educity was one Of
                        the best decision i've ever made. The supportive
                        community, state-of-the-art facilities, and commitment
                        to academic excellence have truely exceed my 
                        expectations.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                        <img src={user_3} alt=""/>
                            <div>
                                <h3>William Jacson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to purpose my degree at educity was one Of
                        the best decision i've ever made. The supportive
                        community, state-of-the-art facilities, and commitment
                        to academic excellence have truely exceed my 
                        expectations.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                        <img src={user_4} alt=""/>
                            <div>
                                <h3>William Jacson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to purpose my degree at educity was one Of
                        the best decision i've ever made. The supportive
                        community, state-of-the-art facilities, and commitment
                        to academic excellence have truely exceed my 
                        expectations.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials