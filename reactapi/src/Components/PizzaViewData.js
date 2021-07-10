import React from 'react'
import cheese from './cheese_burst.jpg'
import fresh from './fresh.jpg'
import hand from './hand.jpg'
import classic from './classic.jpg'
import wheat from './wheat.jpg'
import bill from './bill.jpg'
import { useState } from 'react'
export default function PizzaViewData() {
    const [val,setVal]=useState({
        search:''
     });
     const onDataUpdate=(event)=>
     {
        const {name,value}=event.target;
        setVal((prev)=>
        {
            return{
                ...prev,
                [name]:value
            }
        })
     }
     var dbUrl="http://localhost:5000/orderForm";
     var id=val.search;
     var [res,setRes]=useState([])
     var [view,setView]=useState()
     var display,imgs;
     const onSubmit=()=>
     {
        fetch(dbUrl).then(res=>res.json()).then((data)=>
        {
           setRes(data);
        })
        res.filter((x)=>
        {
            if(x.oid==id)
            {
                if(x.crust=="Cheese Burst")
                {
                   imgs=<img src={cheese} class="pizimg"/>
                }
                else if(x.crust=="Classic Hand Tossed")
                {
                   imgs=<img src={classic} class="pizimg"/>
                }
                else if(x.crust=="Wheat Thin Crust")
                {
                   imgs=<img src={wheat} class="pizimg"/>
                }
                else if(x.crust=="Fresh Pan Pizza")
                {
                   imgs=<img src={fresh} class="pizimg"/>
                }
                else if(x.crust=="New Hand Tossed")
                {
                   imgs=<img src={hand} class="pizimg"/>
                }
                display=<div>
                <table id="piz"><tr><td className="col">Order Id </td><td className="col1">{x.oid}</td></tr>
                <tr><td className="col">Name  </td><td className="col1">{x.cname}</td></tr>
                <tr><td className="col">Email-Id  </td><td className="col1">{x.mail}</td></tr>
                <tr><td className="col">Phone Number  </td><td className="col1">{x.phone}</td></tr>
                <tr><td className="col">Pizza Size  </td><td className="col1">{x.rb}</td></tr>
                <tr><td className="col">Crust Type  </td><td className="col1">{x.crust}</td></tr>
                <tr><td className="col">Toppings  </td><td className="col1">{x.top}</td></tr>
                <tr><td className="col">Cost  </td><td className="col1">{x.cost}</td></tr>
                <tr><td className="col">Order Pizza </td><td>{imgs}</td></tr>
                </table>
                <img src={bill} id="bill" />
                </div>
            }
            setView(display)
        })
     }
    
    return (
        <div>
            <fieldset><legend>Pizza Data View</legend>
            <table><tr><td>Search By Order Id : </td><td>
            <input type="text" name="search" value={val.search} onChange={onDataUpdate} /></td>
            <td><button type="submit" onClick={onSubmit}>Search</button></td></tr></table>
            </fieldset>
            <div>{view}</div>
        </div>
    )
}
