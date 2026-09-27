import React from 'react'

const App = () => {
    const submitHandel=(e)=>{
    e.preventDefault();      
    console.log("Form Submitted....");  
  }

  return (
    <div>
      <form onSubmit={submitHandel}>
        <input type="text" placeholder='Enter Your Name' />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
