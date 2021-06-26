import React from 'react';
import CustFunc from './Components/CustFunc';
function App() {
  let title="Customer General Details"
  let custDetails=[{cid:101,cname:"diyashri",aadhar:"897112345678",pancard:"BNMNJ1234J",city:"mumbai"},
  {cid:102,cname:"priya",aadhar:"897112341234",pancard:"BMNJK2345J",city:"chennai"},
  {cid:103,cname:"parthiban",aadhar:"897112342345",pancard:"PANSK4234J",city:"bangalore"},
  {cid:104,cname:"sandhya",aadhar:"897112345656",pancard:"KKLSK5234J",city:"hyderabad"},
  {cid:105,cname:"hari",aadhar:"897122345612",pancard:"RSCTK6234J",city:"kolkata"}]
  custDetails.filter((data)=>
  {
    if(data.aadhar.length===12 && data.pancard.length===10)
    {
       data.aadhar=data.aadhar.replace(data.aadhar.substring(0,8),"########")
       data.pancard=data.pancard.replace(data.pancard.substring(0,5),"*****");
    }
  }
  )
  return (
   <div>
     <CustFunc  value1={custDetails} value2={title}/>
     
   </div>
   //React.createElement("div",{},React.createElement("h1",{},"Welcome to RSC Training Program"+date.toString()),React.createElement("h2",{className:'header'},"React JS By  Facebook Community"),React.createElement("li",{},""))
  );
}

export default App;
