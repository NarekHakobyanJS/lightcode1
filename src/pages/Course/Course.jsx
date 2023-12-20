import React from 'react'
import './Course.css'
import RegisterBTN from '../../components/RegisterBTN/RegisterBTN';
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


const Course = ({ course }) => {

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.1, once: true }}
      className='course-page'>
      <GoToHome />
      <motion.div
      custom={1}
      variants={contaainerAnimation}
      className='course-page-container'>
        <div className='course-page-main'>

          <div className='course-page-logo'>
            <img src={'../' + course?.image} />
          </div>

          <div className='course-page-description'>
            <div>
              <h2 className='course-page-description-title'>{course?.title}</h2>
              <div className='course-description'>
                <p>{course?.description}</p>
                <p>{course?.hour}</p>
                <p className='course-description-stage'>{course?.stage}</p>
                {
                  course?.stages?.map((stage, index) => {
                    return <li key={index}>{index + 1}.{stage}</li>
                  })
                }
              </div>
            </div>
          </div>

        </div>
        <div className='course-page-foother'>
          <div className='course-page-foother-desc'>
            <b>Տևողությունը : {course?.month}</b>
            <b>Արժեքը : {course?.value} դրամ</b>
          </div>
          <RegisterBTN cName='course-page-btn' />

        </div>
      </motion.div>
    </motion.section>
  )
}

export default Course