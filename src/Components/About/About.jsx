import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt=""/>
        </div>
        <div className='about-right'>
          <h3>ABOUT OUR COMPANY</h3>
          <h2>Nurturing Tomorrow's Career Today</h2>
          <p>Embark on a transformative educational journey with our
          company's comprehensive education programs. Our cutting-edge
          curriculum is designed to empower students with the knowledge,
          skills, and experience needed to excel in the dynamic field of 
          education.</p>
          <p>With a focus on innovation, hands-on learning, and personalized
          membership, our proograms prepare aspiring educators to make a
          meaningfull impact in classroom, school, and communities.</p>
          <p>Whether you aspiring to become a Frontend, Backend Developer, 
          Tester, Designers, our diverse range of programs offers the 
          perfect pathway to achieve your goals and unlock your full
          potential in shaping the future of education. </p>
        </div>
    </div>
  )
}

export default About