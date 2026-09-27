// Why were Hooks introduced?
// Before Hooks, state and lifecycle logic were mainly handled using class components. Hooks made it possible to use these features in functional components and also made logic easier to reuse through custom Hooks.

// Hooks must follow the Rules of Hooks:

// Call Hooks only at the top level of a component or custom Hook.
// Don't call Hooks inside if, for, or nested functions.
// Call Hooks only from React functional components

//hooks are special functions which can be used in functional components to add some features like state, lifecycle methods etc.
//hooks are functions that make functional commponent work like class component.

//state is just nothing but just values or variables of your component which can change over time. It is used to store and manage data that affects the rendering of the component.

import React from 'react'
import {useState} from 'react';

const App = () => {
   const[count,setcount]=useState(0);
   const[name,setname]=useState("");
   const[data,setdata]=useState({naam:"",age:0});
   function increaseage(){
    setdata((prev)=>({
      ...prev,
      age:prev.age+1
    }))
   }
   function write(e){
    setname(e.target.value);
    setdata((prev)=>({
      ...prev,
      naam:e.target.value,
    }))
   }

  return (
    <div>
      <input type="text" onChange={write} />
      <h1>{name} has click {count} times!</h1>
      <button onClick={()=>(setcount(count+1))}>click</button>

      <h1>{data.naam} is {data.age} year old</h1>
      <button onClick={increaseage}>increase age</button>
    </div>
  )
}

export default App
