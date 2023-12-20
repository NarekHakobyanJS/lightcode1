import React from 'react'
import './RegisterBTN.css'
import { NavLink } from 'react-router-dom'

const RegisterBTN = ({cName}) => {
  return (
    <NavLink to='/register' className={cName === undefined ? 'mainRightBTN' : cName }>Գրանցվել</NavLink>
  )
}

export default RegisterBTN