import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [random, setRandom] =

 function addCount(){
    // while () {
      setCount(count + 1);
      // console.log(count);
    // }
  }
  console.log(count);
;
  return (
    <>
      <div>hello  </div>
      <h1>{count}</h1>
      <button type="button" onClick={addCount}>Add</button>
    </>
  )
}

export default App
