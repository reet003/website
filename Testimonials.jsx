import React, { useRef, useState } from 'react';
import './Testimonials.css';
import nextarrow from '../../assets/nextarrow.png';
import backarrow from '../../assets/backarrow.png';
import user1 from '../../assets/user1.jpg';
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.jpg';
import img2 from '../../assets/img2.jpg';
import img7 from '../../assets/img7.jpg';


const Testimonials = () => {
  const slider = useRef();
  const [tx, setTx] = useState(0); // Manage `tx` using state
  const slideWidth = 25; // Each slide moves by 25% based on your current CSS

  const slideForward = () => {
    if (tx > -50) { // Make sure it doesn't go beyond the total slide length
      setTx(tx - slideWidth);
    }
    slider.current.style.transform = `translateX(${tx - slideWidth}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      setTx(tx + slideWidth);
    }
    slider.current.style.transform = `translateX(${tx + slideWidth}%)`;
  };

  return (
    <div className='testimonials'>
      <img src={nextarrow} alt='Next' className='next-btn' onClick={slideForward} />
      <img src={backarrow} alt='Back' className='back-btn' onClick={slideBackward} />
      
      <div className='slider'>
        <ul ref={slider}>
        <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user2} alt='User 2' />
                <div>
                  <h3>Alice</h3>
                  <span>Edusity, France</span>
                </div>
              </div>
              <p>The faculty's expertise, advanced facilities, and the university's overall reputation...</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user3} alt='User 3' />
                <div>
                  <h3>John Edwin</h3>
                  <span>Edusity, London</span>
                </div>
              </div>
              <p>The faculty's expertise, advanced facilities, and the university's overall reputation...</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user1} alt='User 1' />
                <div>
                  <h3>Jimmy gill</h3>
                  <span>Edusity, Australia</span>
                </div>
              </div>
              <p>The faculty's expertise, advanced facilities, and the university's overall reputation...</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user3} alt='User 3' />
                <div>
                  <h3>Javel Edwin</h3>
                  <span>Edusity, London</span>
                </div>
              </div>
              <p>The faculty's expertise, advanced facilities, and the university's overall reputation...</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={img2} alt='Img 2' />
                <div>
                  <h3>Rosey</h3>
                  <span>Edusity, India</span>
                </div>
              </div>
              <p>The faculty's expertise, advanced facilities, and the university's overall reputation...</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={img7} alt='Img 7' />
                <div>
                  <h3>Kim David</h3>
                  <span>Edusity, Greece</span>
                </div>
              </div>
              <p>The faculty's expertise, advanced facilities, and the university's overall reputation...</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
       
