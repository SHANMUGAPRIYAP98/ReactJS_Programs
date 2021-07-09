import React from 'react'
import pizza from './pizza1.jpg'
import { useState, useEffect } from 'react'
export default function PizzaOrderForm() {
    const top = ["Panner", "Mushroom", "Onions", "Extra Cheese", "Tomato"]
    const [data, setData] = useState({
        cname: '',
        mail: '',
        phone: '',
        rb: '',
        crust: 0,
        toppings: [],
        inst: '',
        pay:0,
        cvv:0
    })
    function onTextUpdate(event) {
        const { name, value } = event.target
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
        console.log(data.cname)
    }
    const onSubmit = () => {
        console.log(data)
    }
    var dbUrl = "http://localhost:3001/crustType";
    var dbUrl1 = "http://localhost:3001/Payment";
    const [crust, setCrust] = useState([])
    const [pay,setPay]=useState([])
    useEffect(() => {
        console.log("In useeffect method")
        fetch(dbUrl).then(data => data.json()).then((res) => {
            console.log(res);
            setCrust(res);
        }).catch(e => {
            console.log("I am in Error State!!Please Correct Me to Get Desired Output");
            console.error(e);
        }).finally(() => {
            console.log("I always execute irrespective of Success or Failure!!")
        })
        fetch(dbUrl1).then((data)=>data.json()).then((data)=>
        {
            console.log(data);
            setPay(data)
        })
    }, [])
    
   var isVisible=false;
    return (
        <div >
            <img src={pizza} id="img1"></img>
            <p>hello</p>
            <fieldset id="f1"><legend>Pizza Order Form</legend>
                <table id="pizza">
                    <h1>Delivery Information</h1>
                    <tr><td>Customer Name : </td><td><input type="text" name="cname" value={data.cname} onChange={onTextUpdate} /></td></tr>
                    <tr><td>Email : </td><td><input type="email" name="mail" value={data.mail} onChange={onTextUpdate} /></td></tr>
                    <tr><td>Phone Number : </td><td><input type="text" name="phone" value={data.phone} onChange={onTextUpdate} maxLength="10" /></td></tr>
                    <h1>Order Form</h1>
                    <tr><td>Pizza Size : </td><td><input type="radio" name="rb" value="Small" onChange={onTextUpdate} />Small</td>
                        <td><input type="radio" name="rb" value="Medium" onChange={onTextUpdate} />Medium</td>
                        <td><input type="radio" name="rb" value="Large" onChange={onTextUpdate} />Large</td></tr>
                    <tr><td>Select Crust Type : </td><td>
                        <select name="crust" onChange={onTextUpdate} value={data.crust}>
                            <option value="0">Select Crust Type</option>
                            {
                                crust.map((data) => {
                                    return (<option key={data.id} value={data.type}>{data.type}</option>)
                                })
                            }
                        </select></td></tr>
                    <tr><td>Toppings : </td>
                        {
                            top.map((data) => {
                                return (
                                    <td><input type="checkbox" name="toppings" value={data} onChange={onTextUpdate} />{data}</td>
                                )
                            }

                            )
                        }
                    </tr>
                    <tr><td>Instructions : </td><td><textarea name="inst" onChange={onTextUpdate}>{data.inst}</textarea></td></tr>
                    <tr><td>Payment Method : </td><td><select name="pay" onChange={onTextUpdate}>
                    <option value="0">Select Payment Method</option>
                        {
                          pay.map((data)=>
                          {
                              return(
                                  <option key={data.id} value={data.mode}>{data.mode}</option>
                              )
                            
                          })
                        
                        }

                    </select></td></tr>
                    <tr><td>Amount : </td><td><input type="number" name="cost"/></td></tr>
                    <tr><td><button type="submit" onClick={onSubmit} >Order Pizza</button></td></tr>
                </table>
            </fieldset>
        </div>
    )
}
