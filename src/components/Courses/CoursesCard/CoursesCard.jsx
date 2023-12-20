import React from 'react'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import "./CursesCard.css"


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

const CoursesCard = ({ course, setCourse }) => {

  const openCoursePage = (course) => {
    setCourse(course)
  }

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.1, once: true }}
      custom={1}
      variants={contaainerAnimation}
      className='coursesCard' onClick={() => openCoursePage(course)}>
      <h3 className='coursesCardTitle'>{course.title}</h3>
      <div className='coursesCardImageBlock'>
        <NavLink to={`/course/${course.id}`}>
          <img src={course?.image} />
        </NavLink>

      </div>
      <div>
        <p>Տևողությունը : {course.month}</p>
        <p>Արժեքը : {course.value} դրամ</p>
      </div>
    </motion.div>
  )
}

export default CoursesCard