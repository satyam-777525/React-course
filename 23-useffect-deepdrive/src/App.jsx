// use effect is used to perform the side effect in our component
// what is side effect - when we need to reach outside of our react components to do something ,fetching data from api ,updating the dom,timer functions

// use effect ka mtlb h kaam kb hoga 
// without dependencies array - use effect will run on every single change in the component
// with empty array - runs only when component render on  first time
// with array with value- runs when the state of values will be change 

import React from 'react'
import { useEffect,useState } from 'react';
const App = () => {
  const[count,setcount]=useState(0);

  //without array
  // useEffect(()=>{
  //   document.title=`${count} new messages!`;
  // });

  //with array
   // useEffect(()=>{
  //   document.title=`${count} new messages!`;
  // },[]);

   useEffect(()=>{
    document.title=`${count} new messages!`;
  },[count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setcount(count+1)}>click</button>
    </div>
  )
}

export default App

//A cleanup function is a function returned from useEffect that React calls to clean up the effect before the effect runs again and when the component is removed from the screen.
// useEffect(() => {
//     const timer = setInterval(() => {
//         console.log("Hello");
//     }, 1000);

//     return () => {
//         clearInterval(timer);
//     };
// }, []);