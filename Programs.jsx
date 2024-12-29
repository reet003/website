import React from 'react'
import './Programs.css'
import img2 from '../../assets/img2.jpg'
import img5 from '../../assets/img5.jpg'
import user3 from '../../assets/user3.jpg'
 import icon1 from '../../assets/icon1.jpg'
 import icon2 from '../../assets/icon2.jpg'
 import icon3 from '../../assets/icon3.jpg'
const Programs = () => {
  return (
    <div className='programs' >
        <div className='program'>
            <img src={img2}alt=''/>
            <p>Graduation</p>
             <div className='caption'>
                <img src={icon1}alt=''/>
                <p>Graduation Degree</p>
            </div> 
        </div>
        <div className='program'>
            <img src={img5}alt=''/>
            <p>Masters Degree</p>
            <div className='caption'>
                <img src={icon2}alt=''/>
                <p>Masters degree</p>
               
            </div> 
            
        </div>
        <div className='program'>
            <img src={user3}alt=''/>
            <p>Post Graduation</p>
            <div className='caption'>
                <img src={icon3}alt=''/>
                <p> Post Graduation Degree</p>
            </div> 
        </div>
      
    </div>
  )
}

export default Programs
