import React from 'react';
import {SubHeading} from '../../components'
import {images} from '../../constants'
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app-_wrapper'> 
    <img src={images.chef} alt="chef" /> </div>
    <div className='app-_wrapper info'>
      <SubHeading title="Chef's word"/>
      <h1 className='headtext__cormorant'>What we Believe in</h1>
      <div app__chef-content> 
      <div className='app__chef-content-quote'>
        <img src={images.quote} alt="quote" />
        <p className='p__opensans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam pariatur quam delectus eum aspernatur aliquid est explicabo ullam placeat. Doloremque qui laborum sunt quas cupiditate!</p>
        </div>
        <p className='p__opensans'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ad expedita voluptate rerum assumenda. Accusantium iste provident animi sed beatae ratione. Minima accusantium recusandae nulla.</p>
        </div>
        <div className='app__chef-sign'>
          <p>Kevin Luo</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
    </div>
  </div>
);

export default Chef;
