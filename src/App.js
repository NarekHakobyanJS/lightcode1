import { useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Course from './pages/Course/Course';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';

function App() {
  const [course, setCourse] = useState(null)
  const mainRef = useRef(null)
  const coursesRef = useRef(null)
  const advantagesRef = useRef(null)
  const aboutUsRef = useRef(null)
  const refObject = {
    mainRef,
    coursesRef,
    advantagesRef,
    aboutUsRef
  }

  const scrollHandle = (page) => {
    page.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <section className="App">
      <Routes>
        <Route path='/' element={< Home setCourse={setCourse} ref={refObject} refObject={refObject} scrollHandle={scrollHandle} />} />
        <Route path='/course/:id' element={< Course course={course} />} />
        <Route path='/register' element={< Register />} />
      </Routes>
    </section>
  );
}

export default App;
