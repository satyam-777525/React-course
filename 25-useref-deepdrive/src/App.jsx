// use ref is allow us to access the dom element and for creating the mutable variables which will not rerender the component
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useRef } from 'react'

// const App = () => {
//   const [name,setname] =useState("");
//   const count=useRef(0);

//   useEffect(()=>{
//     count.current=count.current+1;
//   })

//   return (
//     <div>
//       <input type="text" onChange={(e)=>setname(e.target.value)} />
//       <h2>Name:{name}</h2>
//       <h2>renders:{count.current}</h2>
//     </div>
//   )
// }

// export default App



const App = () => {
  const inputele=useRef();
  function handleclick(){
    console.log(inputele.current);
    inputele.current.style.width="300px";
  }
  return (
    <div>
      <input type="text" ref={inputele} />
      <button onClick={handleclick} >click</button>
    </div>
  )
}

export default App



