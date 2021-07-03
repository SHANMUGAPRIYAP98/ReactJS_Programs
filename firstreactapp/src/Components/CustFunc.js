import React from 'react'
import Cust from './Cust.css'
export default function CustFunc({value1,value2}) {
    let studDetails=[{sid:1,sname:"aaaa",marks:[50,60,70]},
    {sid:2,sname:"bbbb",marks:[80,90,78]},
    {sid:3,sname:"cccc",marks:[20,30,40]},
    {sid:4,sname:"dddd",marks:[38,50,50]},
    {sid:5,sname:"eeee",marks:[76,72,75]},
    {sid:6,sname:"ffff",marks:[28,54,75]},
    {sid:7,sname:"gggg",marks:[87,98,90]},
    {sid:8,sname:"hhhh",marks:[90,80,70]},
    {sid:9,sname:"iiii",marks:[28,32,40]},
    {sid:10,sname:"jjjj",marks:[10,20,30]}
]
let rdata=[],pdata=[],studTable;
let r1={},p1={};
let printData1;
let stud=new Map();
studDetails.map((x)=>
{
    stud.set(x.sid,x);
    x.marks.filter((mark)=>
    {
        if(mark<40)
        {
           r1=stud.get(x.sid)
        }

    })
    console.log(r1.sid+" "+x.sid)
    if(r1.sid==x.sid)
    {
        rdata.push(r1)
    }
    if(r1.sid!=x.sid)
    {
        pdata.push(stud.get(x.sid))
    }
})

console.log(rdata)
console.log("=======================")
console.log(pdata)

if(studDetails.length>=1)
{
    printData1=<table>
    <thead><tr><th>SID</th><th>STUDENT NAME</th><th>MARK1</th><th>MARK 2</th><th>MARK 3</th></tr></thead>
    {
       rdata.map((data)=>
       {
           return(
            <tbody><tr><td class="tab">{data.sid}</td><td class="tab">{data.sname}</td><td class="tab">{data.marks+""}</td></tr></tbody>
           )
       })}
    {
       pdata.map((data)=>
       {
           return(
            <tbody><tr><td class="tab1">{data.sid}</td><td class="tab1">{data.sname}</td><td class="tab1">{data.marks+""}</td></tr></tbody>
           )
       })
    }
      
    
</table>
}



// console.log("+++++++++++++++++++++++++")
// var csid=[]
// for(let i=0;i<rdata.length;i++)
// {
//     csid.push(rdata[i].sid)
// }
// console.log(csid)
// studDetails.map((data)=>
// {
//     printData1=<table>
//     <thead><tr><th>SID</th><th>STUDENT NAME</th><th>MARK1</th><th>MARK 2</th><th>MARK 3</th></tr></thead>
//     {

//     rdata.map((x)=>
//     {
//         if(data.sid==x.sid)
//         {
//             return(
//                 <tbody><tr><td class="tab">{data.sid}</td><td class="tab">{data.sname}</td><td class="tab">{data.marks+""}</td></tr></tbody>
//                )
//         }
//     })
//         pdata.map((x)=>
//         {
//             if(data.sid==x.sid)
//         {
//             return(
//                 <tbody><tr><td class="tab1">{data.sid}</td><td class="tab1">{data.sname}</td><td class="tab1">{data.marks+""}</td></tr></tbody>
//                )
//         }
//         })
    
//     }
//     </table>
// })












// let studTable;
// studDetails.map((data)=>{
//   data.marks.map((x)=>{
//       if(x<40)
//       {
//         
//         studTable=data;
//         console.log(studTable)
//       }
//     //   else
//     //   {
//     //       studTable =<table><th>SID</th><th>SNAME</th><th>MARK 1</th><th>MARK 2</th><th>MARK 3</th>
//     //       <tr id="p"><td>{data.sid}</td><td>{data.sname}</td><td>{data.marks}</td></tr>
//     //        </table>
//     //   }
//   })
// })



    // let con=false;
    // let d=new Date();
    // let data="";
    // if(con)
    // {
    //     data=<div id="con">Flight Ticket Confirmed.{d.toString()}</div>
    // }
    // else
    // {
    //     data=<div id="con">Flight Ticket Cancelled for {d.toString()}</div>
    // }
    
    return (
        <div>
            <h1>{value2}</h1>
            <table>
                <thead><tr><th>CID</th><th>CNAME</th><th>AADHAR CARD</th><th>PAN CARD</th><th>MOBILE NO</th></tr></thead>
                {
                    value1.map((data) => {
                        return (
                            <tbody><tr><td>{data.cid}</td><td>{data.cname}</td><td>{data.aadhar}</td><td>{data.pancard}</td><td>{data.city}</td></tr></tbody>
                        )
                    })
                }
            </table>
           <div>
               <h1><span id="s1">REAPPEAR STUDENTS</span>&nbsp;&nbsp;VSES&nbsp;&nbsp;<span id="s2">PASSED STUDENTS</span></h1>
                {printData1}
           </div>
        </div>
    )
}
