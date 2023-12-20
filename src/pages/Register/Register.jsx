import { Formik } from 'formik'
import React from 'react'
import './Register.css'
import men3 from './men3.png'
import GoToHome from '../../components/GoToHome/GoToHome';
import { motion } from 'framer-motion';

const contaainerAnimation = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    })
}

const Course = ['Web (Front-End) ծրագրավորում', 'JavaScript ծրագրավորում', 'React.js ծրագրավորում', 'Manual QA', 'UX/UI դիզայն', 'SMM', 'Երեխաների ծրագրավորում', 'PM դասընթաց']

const Register = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.1, once: true }}
            className='form-page'>
            <GoToHome />
            <motion.form
                custom={1}
                variants={contaainerAnimation}
                className='reg-form'>
                <div className='reg-form-img'>
                    <img src={men3} />
                </div>
                <div className='reg-form-block' >
                    <input placeholder='Անուն' />
                    <input placeholder='Ազգանուն' />
                    <input placeholder='Հեռախոսահամար' />
                    <select>
                        {
                            Course.map((cours) => {
                                return <option key={cours}>{cours}</option>
                            })
                        }
                    </select>
                    <button>Գրանցվել</button>
                </div>

            </motion.form>
        </motion.section>
    )
}

export default Register