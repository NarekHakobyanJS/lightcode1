import React from 'react'
import AboutUs from '../../components/AboutUs/AboutUs'
import Advantages from '../../components/Advantages/Advantages'
import CoursesMain from '../../components/Courses/CoursesMain'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Questions from '../../components/Questions/Questions'
import './Home.css'


const Home = React.forwardRef( ({setCourse, refObject, scrollHandle}, ref) => {

  const {coursesRef, mainRef, advantagesRef, aboutUsRef} = ref
 
  return (
    <>
    <Header refObject={refObject} scrollHandle={scrollHandle}/>
    <section className='home'>
        
        <Main ref={mainRef}/>
        <CoursesMain ref={coursesRef} setCourse={setCourse}/>
        <Advantages ref={advantagesRef}/>
        <AboutUs ref={aboutUsRef}/>
        <Questions />
    </section>
    <Footer />
    </>
   
  )
})

export default Home