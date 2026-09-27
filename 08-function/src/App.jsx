import React from 'react';

const App = () => {

  const btn = () => {
    console.log("btn is clicked");
  };

  const inputchange = () => {
    console.log("user is typing");
  };

  const pagescrollong=(val)=>{
    console.log(val);
  }

  return (
    <div>
      <button onClick={btn}>Click me</button>
      <br />

      <button onDoubleClick={btn}>Double click</button>
      <br />

      

      <button
        onMouseEnter={() => {
          console.log("mouse is entered");
        }}
      >
        Mouse entered
      </button>





      <div>
        <input onChange={function(elem){
          console.log(elem.target.value);
        }} type="text" placeholder="Enter your name" />
      </div>

     




      <div onWheel={(elem)=>{
        pagescrollong(elem.deltaY)
      }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
      </div>
      
      
    </div>
  );
};

export default App;
