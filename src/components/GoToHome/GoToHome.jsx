import React from 'react'
import './GoToHome.css'
import { useNavigate } from 'react-router-dom';
import {FaArrowCircleLeft} from 'react-icons/fa'

const GoToHome = () => {
    const navigate = useNavigate()

    const goToHome = () => navigate('/')
    
  return (
    <div>
        <FaArrowCircleLeft className='go-to-home' onClick={goToHome} />
    </div>
  )
}

export default GoToHome