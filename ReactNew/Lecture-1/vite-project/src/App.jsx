import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  let data = 10;
  return(
    <>
      <h1>Hello World {data}</h1>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

// function Header(){
//   return(
//     <h1>Header</h1>
//   )
// }
// function Main(){
//   return(
//     <h1>Main Body</h1>
//   )
// }
// function Footer(){
//   return(
//     <h1>Footer</h1>
//   )
// }

export default App
