import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
//useeffect is a hook which is used to perform side effects in functional components. It takes a function as an argument and runs it after every render. It can also take a second argument which is an array of dependencies. If any of the dependencies change, the effect will run again. If the array is empty, the effect will run only once after the initial render.
const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function achanging(){
    console.log("a is changing...")
  }
  function bchanging(){
    console.log("b is changing...")
  }

  useEffect(function(){                       // [] is ka mtlb h agar a variable ka state change hoga tbhi useeffect chalega 
    console.log("useeffect is running....")
    achanging()
  },[a])

  useEffect(function(){
    console.log("useeffect is running....")
    bchanging()
  },[b])


  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={()=>{
        setA(a+1)
      }}
      >A change</button>

      <button onClick={()=>{
        setB(b+1)
      }}
      >B change</button>
    </div>
  )
}

export default App
