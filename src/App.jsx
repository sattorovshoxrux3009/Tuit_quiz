import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Subjects from './components/Subjects/Subjects'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
function App() {
  const [onQuiz,setOnQuiz]=useState(false)
  const [select,setSelect]=useState(0);
  const [number,setNumber]=useState(5);
  return (
    <>
     <Navbar  setOnQuiz={setOnQuiz} onQuiz={onQuiz}/>
     {!onQuiz && <Subjects setOnQuiz={setOnQuiz} select={select} setSelect={setSelect} number={number} setNumber={setNumber}/>}
     {onQuiz && <Main  setOnQuiz={setOnQuiz} select={select} setSelect={setSelect} number={number} setNumber={setNumber}/>}
     <Footer/>
    </>
  )
}

export default App
