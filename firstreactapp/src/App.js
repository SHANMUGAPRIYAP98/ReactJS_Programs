import logo from './logo.svg';
import React from 'react';
import './App.css';
import DemoClass from './Components/DemoClass';
import DemoFunc from './Components/DemoFunc';
function App() {
  let date=new Date(2021,6,24)
 
  return (
    <div>
     <h1>Today's date : {date.toString()}</h1>
     <DemoClass/>
     <DemoFunc/>
   </div>
   //React.createElement("div",{},React.createElement("h1",{},"Welcome to RSC Training Program"+date.toString()),React.createElement("h2",{className:'header'},"React JS By  Facebook Community"),React.createElement("li",{},""))
  );
}

export default App;
