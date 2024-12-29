import React from 'react'
import './Campus.css'
// mport img4 from '../../assets/img4.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import img9 from '../../assets/img9.jpg'
import whitearrow from '../../assets/whitearrow.jpg'

const Campus = () => {
  return (
    <div className='campus'>
        <div className='gallery'>
            <img src={img7}alt=''/>
            <img src={img8}alt=''/>
            <img src={img9}alt=''/>
            {/* <img src={img4}alt=''/> */}
        
    
        </div>
        <button className='btn dark-button'> See more here<img src={whitearrow} alt=''/></button>
    </div>
  )
}

export default Campus
