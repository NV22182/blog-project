import React from 'react'
import { images } from "../constants/index.js";

const Header = () => {
  return (
    <section>
    <header>
     <div>
     <img src={images.Logo} alt=""/>
     </div>
     <div></div>
    </header>
  </section>
  ) 
};

export default Header