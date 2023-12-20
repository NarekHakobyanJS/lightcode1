import React, { useEffect, useRef, useState } from 'react';
import Burger from '../Nav/Burger';
import './Header.css';

const Header = ({refObject, scrollHandle}) => {
  const [act, setAct] = useState(false)
  
  const changeBG = () => {
    if(window.scrollY >= 40){
      setAct(true)
    }else {
      setAct(false)
    }
  }

  window.addEventListener('scroll', changeBG)
  return (
    <header className={act ? 'act' : ''}>
        <div className='header-logo'>
            <img src='./img/logo.png' />
            <h1>Light Code</h1>
        </div>
        <div>
            <Burger refObject={refObject} scrollHandle={scrollHandle}/>
        </div>
    </header>
  )
}

export default Header