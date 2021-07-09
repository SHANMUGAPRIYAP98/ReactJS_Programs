import React from 'react'
import { useState,useEffect } from 'react'
export default function RadioBut() {
    const [pay,setPay]=useState([])
    useEffect(()=>
    {
        fetch("http://localhost:3006/Payment").then((x)=>x.json()).then((data)=>
        {
            console.log(data)
            setPay(data)
        })
    },[])
   var dt='',val;
   const onChangeBut=(event)=>
   {
       dt=event.target.value;
       setPay(dt)
       if(dt=="Cash on Dellivery")
       {
           val="pay cash "
       }
   }
  
    return (
        <div> <p>Payment Mode : </p>
           {
               pay.map((data,key)=>
               {
                   return(
                 <p><input type="radio" key={key} name="rb" value={data.mode}  onChange={onChangeBut}/>{data.mode}</p>)
               })
           }
         <p>{val}</p>
        </div>
    )
}
