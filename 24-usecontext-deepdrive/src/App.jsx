// use context is used for manage global data in react application insted of passing props
// there are three steps
//1. create the context
//2.provide the context
//3.consuming the context

import React from 'react'
import { UserContext } from "./context/UserContext";
import Profile from "./components/Profile";

const App = () => {
  const user = {
    name: "Satyam",
    age: 22
  };
  return (
    <div>
      <UserContext.Provider value={user}>
        <h1>my react app</h1>
        <Profile/>
        </UserContext.Provider>
      

    </div>
  )
}

export default App
