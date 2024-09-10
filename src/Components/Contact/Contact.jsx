import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg_icon.png'
import mail_icon from '../../assets/mail_icon.jpg'
import phone_icon from '../../assets/phone_icon.png'
import location_icon from '../../assets/location_icon.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8822580b-c6aa-4004-a1db-f2dedf5f5667");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send Us a Message <img src={msg_icon} alt=""/></h3>
            <p>Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are 
            important to us as we strive to provide exceptional service to our 
            company side. </p>
            <ul>
                <li><img src={mail_icon} alt=""/>veitechnologies@gmail.com</li>
                <li><img src={phone_icon} alt=""/>+91 92037 85766</li>
                <li><img src={location_icon} alt=""/>No 4, Sundra, Muthukrishna Mudali Street,<br/>Gidangal 1, Tindivanam,<br/> Tamilnadu 604001, India.</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name="name" placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder='Enter your mobile number' required/>
                <label>Write your message here</label>
                <textarea name="message" row="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark_btn'>Submit now</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact