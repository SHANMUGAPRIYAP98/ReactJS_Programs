import React from 'react'
import Cust from './Cust.css'
export default function CustFunc({value1,value2}) {

    let studDetails=[{sid:1,sname:"aaaa",marks:[50,60,70]},
    {sid:2,sname:"bbbb",marks:[80,90,78]},
    {sid:3,sname:"cccc",marks:[20,30,40]},
    {sid:4,sname:"dddd",marks:[38,50,50]},
    {sid:5,sname:"eeee",marks:[76,72,75]},
]
let reappear;
let pass;
studDetails.map((data)=>
{
    for(let i=0;i<data.marks.length;i++)
    {
        if(data.marks[i]<40)
        {
          reappear=<table><th>SID</th><th>SNAME</th><th>MARK 1</th><th>MARK 2</th><th>MARK 3</th>
          <tr><td>{data.sid}</td><td>{data.sname}</td><td>{data.marks[0]}</td><td>{data.marks[1]}</td><td>{data.marks[2]}</td></tr>
          </table>
        }
        else{
            pass=<table><th>SID</th><th>SNAME</th><th>MARK 1</th><th>MARK 2</th><th>MARK 3</th>
          <tr><td>{data.sid}</td><td>{data.sname}</td><td>{data.marks[0]}</td><td>{data.marks[1]}</td><td>{data.marks[2]}</td></tr>
          </table>
        }
    }
})

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
            <h1>Reappear Students</h1>
            {reappear}
            <h1>Passed Students</h1>
            {pass}
        </div>
    )
}
