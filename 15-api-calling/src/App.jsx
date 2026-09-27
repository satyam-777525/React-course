import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {


  // // fetch
  // const getdata= async()=>{
  //   const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   const data= await response.json()
  //   console.log(data.title)
  // }
  const [data, setData] = useState([])

  
  // axios
  const getdata=async()=>{

    
    const response= await axios.get('https://picsum.photos/v2/list')

    setData(response.data)
  }

  return (
    <div>
      <button onClick={getdata} >get data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3>Hello,{elem.author}{idx}</h3>
        })}
      </div>
      
    </div>
  )
}

export default App
