import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    cursor : pointer;
  }

  li a {
    text-decoration: none;
    color : black;
}

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: white;
    position: absolute;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: -20px;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: black;
    }
  }
`;

const RightNav = ({ open, refObject, scrollHandle }) => {


  return (
    <Ul open={open}>
      <li onClick={() => scrollHandle(refObject.mainRef)}>Գլխավոր</li>
      <li onClick={() => scrollHandle(refObject.coursesRef)}>Դասընթացներ</li>
      <li onClick={() => scrollHandle(refObject.advantagesRef)}>Առավելություներ</li>
      <li><NavLink to='/register'>Գրանցում</NavLink></li>
      <li onClick={() => scrollHandle(refObject.aboutUsRef)}>Մեր մասին</li>
    </Ul>
  )
}

export default RightNav