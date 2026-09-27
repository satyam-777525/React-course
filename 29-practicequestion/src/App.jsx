// import React, { useState } from 'react'

// const App = () => {
//   const [search,setsearch] =useState("");
//   const users=[
//     {id:1,name:"satyam"},
//     {id:2,name:"rahul"},
//     {id:3,name:"sarthak"},
//     {id:4,name:"ravan"}
//   ]
//   const filterdusers=users.filter((user)=>(user.name.toLowerCase().includes(search.toLowerCase())));

//   return (
//     <div>
//       <label htmlFor="">user:</label>
//       <input type="text" value={search} onChange={(e)=>setsearch(e.target.value)} placeholder='search user' />

//       {filterdusers.map((user)=>(
//         <h1 key={user.id} >{user.name}</h1>
//       ))
//       }

//     </div>
//   )
// }


// export default App

// pagination code
// import { useState } from "react";
// function App() {
//   const users = ["Satyam", "Rahul", "Aman", "Ravi", "Priya", "Neha"];
//   const [page, setPage] = useState(1);
//   const limit = 2;

//   const start = (page - 1) * limit;
//   const data = users.slice(start, start + limit);

//   return (
//     <div>
//       {data.map((user) => (
//         <h3 key={user}>{user}</h3>
//       ))}

//       <button
//         disabled={page === 1}
//         onClick={() => setPage(page - 1)}
//       >
//         Prev
//       </button>

//       <span> {page} </span>

//       <button
//         disabled={start + limit >= users.length}
//         onClick={() => setPage(page + 1)}
//       >
//         Next
//       </button>
//     </div>
//   );
// }

// export default App;


// api fetch state and effect
// import React from 'react'
// import { useState,useEffect } from 'react'

// const App = () => {
//   const[users,setuser]=useState([]);
//   const[loading,setloading]=useState(true);
//   const[error,seterror]=useState("");

//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res)=> res.json())
//     .then((data)=>setuser(data))
//     .catch((err)=>seterror(err))
//     .finally(()=>(setloading(false)));
//   },[]);

//   if(loading) return <h1>Loading.....</h1>
//   if(error) return  <h1>{error}</h1>

//   return (
//     <div>
//       {
//         users.map((user)=>(
//           <h1 key={user.id}>{user.name}</h1>
//         ))
//       }
      
//     </div>
//   )
// }

// export default App


// TODO list

// import React from 'react'
// import { useState,useEffect } from 'react'

// const App = () => {
//   const [text,settext] =useState("");
//   const [todo,settodo] =useState([]);

//   function addtodo(){
//     settodo([
//       ...todo,
//       text
//     ]);
//     settext("");
//   }
//   function deletetodo(index) {
//     settodo(todo.filter((_, i) => i !== index));
//   }

//   return (
//     <div>
//       <input type="text" value={text} placeholder='Write task' onChange={(e)=>(settext(e.target.value))}  />
//       <button onClick={addtodo}>Add</button>
//       {
//         todo.map((todo,index)=>(
//           <div key={index}>
//             {todo}
//             <button onClick={()=>deletetodo(index)} >Delete</button>
//           </div>
//         ))
//       }
//     </div>
//   )
// }

// export default App

// nested comment

// import React from 'react'

// const App = () => {
//   const comments = [
//   {
//     id: 1,
//     text: "This is a great post",
//     replies: [
//       {
//         id: 2,
//         text: "Yes, absolutely!",
//         replies: [
//           {
//             id: 3,
//             text: "I agree",
//             replies: []
//           }
//         ]
//       }
//     ]
//   },
//   {
//     id: 4,
//     text: "Nice article",
//     replies: []
//   }
// ];
// function Comment({comment}){
//   return (
//     <div style={{marginLeft:"30px"}}>
//       <p>{comment.text}</p>
//       {
//         comment.replies.map((reply)=>(
//           <Comment
//           key={comment.id}
//           comment={reply}
//           />
//         ))
//       }
//     </div>
//   )
// }

//   return (
//     <div>
//       {
//         comments.map((comment)=>(
//           <Comment
//           key={comment.id}
//           comment={comment}
//           />
//         ))
//       }
//     </div>
//   )
// }

// export default App

// accordion

// import React, { useState } from 'react'

// const App = () => {
//   const [open,setopen] =useState(null);
//   const data = [
//     {
//       q: "What is React?",
//       a: "React is a JavaScript library."
//     },
//     {
//       q: "What is useState?",
//       a: "useState is a React Hook."
//     },
//     {
//       q: "What is useEffect?",
//       a: "useEffect handles side effects."
//     }
//   ];
//   return (
//     <div>
//       {
//         data.map((item,index)=>(
//           <div key={index}>
//             <h3 onClick={()=>(setopen(open==index?null:index))}>{item.q}</h3>
//             {open==index&&<p>{item.a}</p>}

//           </div>
//         ))
//       }
      
//     </div>
//   )
// }

// export default App


// modal
// import React, { useState } from 'react'

// const App = () => {
//   const[open,setopen]=useState(false);
//   return (
//     <div>
//       <button onClick={()=>setopen(true)}>open</button>
//       {
//         open && (
//           <div>
//             <h1>this is model</h1>
//             <button onClick={()=>(setopen(false))}>close</button>
//           </div>
//         )
//       }
//     </div>
//   )
// }

// export default App


// tabs

import React from 'react'
import { useState } from 'react';

const App = () => {
  const [active,setactive]=useState(0);
  const tabs = [
    { name: "Profile", content: "This is Profile page" },
    { name: "Posts", content: "This is Posts page" },
    { name: "Settings", content: "This is Settings page" }
  ];
  return (
    <div>
      {
        tabs.map((tab,index)=>(
          <button onClick={()=>setactive(index)} >{tab.name}</button>
        ))
      }
      {
        tabs.map((tab,index)=>(
          active===index&& <h1>{tab.content}</h1>
        ))
      }

    </div>
  )
}

export default App
