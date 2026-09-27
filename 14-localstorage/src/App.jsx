import React from 'react'
// localStorage is the small database of website it store only important thing like username or password.and its is store the data permanent

//session storage is the temporary store the data after session out data is clear

// localStorage.clear()
// sessionStorage.clear()

// localStorage.setItem(Key,value)
// localStorage.getItem(key)
// localStorage.removeItem(key)

//inspect->application->localStorage


const App = () => {

  localStorage.setItem("user","satyam")
  localStorage.setItem("age","20")
  const u=localStorage.getItem("user");

  console.log(u);

  //store the object in local storage

  const us={
    user:'chinu',
    age:18
  }

  // convert the object into string
  localStorage.setItem('user1',JSON.stringify(us))
  //convert the string into object
  const u2=JSON.parse(localStorage.getItem('user1'))
  console.log(u2)

  return (
    <div>
      App
    </div>
  )
}

export default App
