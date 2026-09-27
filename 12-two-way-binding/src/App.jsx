import React from 'react'
import { useState } from 'react';
// two way binding-> input ke andr koi bhi change krna ya form submit krna
const App = () => {

  const [tittle, settittle] = useState('')

    const submitHandel=(e)=>{
    e.preventDefault();      
    console.log(`Form Submitted.... by ${tittle}`);  
    console.log(tittle)

    settittle('') // this is for referesh the input feild
  }

  return (
    <div>
      <form onSubmit={submitHandel}> 

        <input  type="text"
         placeholder='Enter Your Name' 
         value={tittle}
         onChange={(e)=>{
          settittle(e.target.value)
         }}
         />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
