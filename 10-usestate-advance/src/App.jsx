import React from 'react'
import { useState } from 'react'
//Batching is a React optimization where multiple state updates are grouped together into a single re-render instead of re-rendering after every setState call.
const App = () => {
  const [num, setnum] = useState(10)
  function click(){
    setnum(prev=>(prev+1))
    setnum(prev=>(prev+1))
    setnum(prev=>(prev+1))
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={click}>click</button>
    </div>
  )
}

export default App
