import React from 'react'
import { useState } from 'react'
// hooks are special functions which can be used in functional components to add some features like state, lifecycle methods etc.
// state is data that is managed by the component and can change over time. It is used to store and manage data that affects the rendering of the component. 
// useState is a React Hook used to add state to functional components.
// useeState returns an array with two elements, first is the current state value and second is a function which is used to update the state value
// useState takes an initial value as an argument and returns the current state value and a function to update it
// useState can be used to manage multiple state values in a component by calling it multiple times with different initial values

//useeffect is a hook which is used to perform side effects in functional components. It takes a function as an argument and runs it after every render. It can also take a second argument which is an array of dependencies. If any of the dependencies change, the effect will run again. If the array is empty, the effect will run only once after the initial render.
//useref is a hook which is used to create a reference to a DOM element or a value that persists across renders. It returns an object with a current property which can be used to access the referenced value. It can be used to access DOM elements, store mutable values, and persist values across renders without causing re-renders.
//usecontext is a hook which is used to access the context value in functional components. It takes a context object as an argument and returns the current context value. It can be used to share data between components without passing props down the component tree.
//usememo is a hook which is used to memoize a value or a function. It takes a function and an array of dependencies as arguments and returns a memoized value. If any of the dependencies change, the memoized value will be recalculated. It can be used to optimize performance by avoiding unnecessary calculations and re-renders.
//usereducer is a hook which is used to manage complex state logic in functional components. It takes a reducer function and an initial state as arguments and returns the current state value and a dispatch function. The reducer function takes the current state and an action as arguments and returns a new state based on the action type. The dispatch function is used to send actions to the reducer function to update the state. It can be used to manage state in a more predictable way, especially when dealing with multiple state values or complex state transitions.
//usecallback is a hook which is used to memoize a function. It takes a function and an array of dependencies as arguments and returns a memoized version of the function. If any of the dependencies change, the memoized function will be recreated. It can be used to optimize performance by avoiding unnecessary re-creations of functions and re-renders of components that depend on those functions.
const App = () => {
  const [num, setnum] = useState(0);
  const [user, setuser] = useState('Satyam')
  function increasenum(){
    setnum(num+1)
  }
  function decreasenum(){
    setnum(num-1)
  }
  function jumpto5(){
    setnum(num+5)
  }
  return (
    <div>
      <h2>{user}</h2>
      <h1>{num}</h1>
      <button onClick={increasenum}>Increase</button>
      <button onClick={decreasenum}>Decrease</button>
      <button onClick={jumpto5}>Increase By 5</button>
    </div>
  )
}

export default App
// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [num, setnum] = useState({user:"Satyam",age:20})

//   const click=()=>{
//     const temp={...num}
//     temp.user="Rahul"
//     temp.age=21
//     setnum(temp)
//   }
//   return (
//     <div>
//       <h1>{num.user},{num.age}</h1>
//       <button onClick={click}>click me </button>
      
//     </div>
//   )
// }

// export default App

 
 
