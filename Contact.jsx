import React from 'react'
import './Contact.css'
import msgicon from '../../assets/msgicon.png'
import mailcon from '../../assets/mailcon.png'
import phnicon from '../../assets/phnicon.png'
import locationicon from '../../assets/locationicon.png'
import whitearrow from '../../assets/whitearrow.jpg'

const Contact = () => {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f3e6e7e0-2c46-4f01-961f-317f20f57913");

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
        <h3>Send us a message <img src={msgicon} alt='' /></h3>
        <p>The Contact Us page is a direct line of communication between users and website owners, offering a streamlined way to ask questions, give feedback, and get support. Every contact method needs to work flawlessly to facilitate prompt and efficient interactions, whether it's an email address, a phone number, or a form</p>
        <ul>
          <li><img src={mailcon} alt='' />Contact@123</li>
          <li><img src={phnicon} alt='' />+1-234-784-896</li>
          <li><img src={locationicon} alt='' />77 Massbrudge, Ave<br />Ma 01239,United States
          </li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type='text 'name='name'placeholder='Enter your name' required/>
          <label>Phone Number</label>
          <input type='tel'name='phone'placeholder='Enter your mobile number'required/>
          <label>Write your message</label>
          <textarea name='message'rows='6' placeholder='Enter your message here' required></textarea>
          <button type='submit'className='btn dark-btn'>Submit Now<img src={whitearrow}alt=''/></button>
        </form>
        <span>{result}</span>
      </div>


    </div>
  )
}

export default Contact
