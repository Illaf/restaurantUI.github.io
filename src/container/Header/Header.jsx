import React from 'react';
import {images} from '../../constants';
import './Header.css';
import {SubHeading} from '../../components';
const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className="app__wrapper-info">

    
    
      < SubHeading className="p__opensans" style={{color:"white"}} title="Chase the best flavours" />
      <h1 className="app__header-h1">The key to Fine <br /> dining</h1>
      <p className="p__opensans" style={{margin:"2rem 0"} }> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Doloremque, ipsum, eveniet fuga nulla non possimus enim <br /> aliquid placeat voluptatibus saepe ducimus ullam soluta aspernatur a? </p>
      <button className="custom__button">Explore Menu</button>
      <div className="app__wrapper-img">
        <img src={images.welcome} alt="loading" />
    </div>
    <div></div>
  </div>
  </div>
);

export default Header;
