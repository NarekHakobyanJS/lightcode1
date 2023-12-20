import React from 'react'
import RegisterBTN from '../RegisterBTN/RegisterBTN'
import './Main.css'

const Main = React.forwardRef((_, ref) => {
    return (
        <section ref={ref} className='main-block'>
            <div className='mainLeft'>
                <img src='./img/men.png' />
            </div>
            <div className='mainRight'>
                <div>
                <h1 className='mainRightTitle'> LightCode </h1>
                <h2 className='mainRightSubTitle'>արի քո երազանքի մասնագիտության հետևից</h2>
                </div>
                <RegisterBTN />
            </div>
        </section>
    )
}
) 
export default Main