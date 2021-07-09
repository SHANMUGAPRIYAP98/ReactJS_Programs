import React from 'react'
import { useState, useEffect } from 'react'
import design from './Design.css'
import pizza1 from './pizza1.jpg'
export default function PizzaOrderForm() {
    const toppings = ["Paneer", "Mushroom", "Onion", "Capsicum", "Tomato"];
    const [data, setData] = useState({
        oid:'',
        cname: '',
        mail: '',
        phone: '',
        rb: '',
        crust: 0,
        num: '',
        cvv: '',
        cost: 0
    })
    const OnTextChange = (event) => {
        const { name, value } = event.target;
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const [paym, setPaym] = useState('')
    const onChangePay = (event) => {
        setPaym(event.target.value)
    }
    var dbUrl1 = "http://localhost:3006/crustType"
    var dbUrl2 = "http://localhost:3006/Payment"
    const [type, setType] = useState([])
    const [pay, setPay] = useState([])
    useEffect(() => {
        fetch(dbUrl1).then(x => x.json()).then((data) => {
            console.log(data);
            setType(data)
        }).catch(e=>
            {
                console.log("Please Correct Me to get the Desired Ouput")
                console.log(e)
            }).finally(()=>
            {
                console.log("I always execute irrespective of success call or failure call")
            })
        fetch(dbUrl2).then(x => x.json()).then((pays) => {
            console.log(pays)
            setPay(pays)
        }).catch(e=>
            {
                console.log("Please Correct Me to get the Desired Ouput")
                console.log(e)
            }).finally(()=>
            {
                console.log("I always execute irrespective of success call or failure call")
            })
    }, [])
    var display;
    if (paym === "Credit Card") {
        display = <div><table><tbody><tr><td>Credit Card Number/Debit Card Number : </td>
            <td><input type="text" name="num" value={data.num} onChange={OnTextChange} maxLength="16" /></td></tr>
            <tr><td>CVV Number : </td><td><input type="password" name="cvv" value={data.cvv} onChange={OnTextChange} maxLength="3" /></td></tr></tbody></table></div>
    }
    else if (paym === "Debit Card") {
        display = <div><table><tbody><tr><td>Credit Card Number/Debit Card Number : </td>
            <td><input type="text" name="num" value={data.num} onChange={OnTextChange} maxLength="16" /></td></tr>
            <tr><td>CVV Number : </td><td><input type="password" name="cvv" value={data.cvv} onChange={OnTextChange} maxLength="3" /></td></tr></tbody></table></div>
    }
    var sCost = 0, cCost = 0;
    if (data.rb == "Small") {
        sCost = 100;
        data.cost= cCost + sCost;
    }
    else if (data.rb == "Medium") {
        sCost = 150;
        data.cost = cCost + sCost;
    }
    else if (data.rb == "Large") {
        sCost = 175;
        data.cost= cCost + sCost;
    }
    else {
        sCost = 0;
        data.cost = cCost + sCost;
    }
    if (data.crust == "Cheese Burst" || data.crust == "New Hand Tossed") {
        cCost = 50;
        data.cost = cCost + sCost;
    }
    else if (data.crust == "Classic Hand Tossed" || data.crust == "Wheat Thin Crust" || data.crust == "Fresh Pan Pizza") {
        cCost = 75;
        data.cost = cCost + sCost;
    }
    else {
        cCost = 0;
        data.cost = cCost + sCost;
    }
    var postUrl="http://localhost:4000/orderForm";
    function onSubmitForm() {
        const response = {
            method: "Post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        fetch(postUrl,response).then(res=>res.json()).then((x)=>
        {
            console.log(x)
            console.log("Form Submitted Successfully");
           
        }).catch(e=>
            {
                console.log("Please Correct Me to get the Desired Ouput")
                console.log(e)
            }).finally(()=>
            {
                console.log("I always execute irrespective of success call or failure call")
            })
            alert("Your Order Placed Successfully for "+data.oid);
    }
    return (
        <div>
            <img src={pizza1} />
            <fieldset id="f1">
                <legend>Pizza Order Form</legend>
                <table id="t1">
                    <tbody>
                        <tr><td>Order Id : </td><td><input type="text" name="oid" value={data.oid} onChange={OnTextChange}/></td></tr>
                        <tr><td>Customer Name : </td><td><input type="text" name="cname" value={data.cname} onChange={OnTextChange} /></td></tr>
                        <tr><td>Email-Id : </td><td><input type="email" name="mail" value={data.mail} onChange={OnTextChange} /></td></tr>
                        <tr><td>Phone Number : </td><td><input type="text" name="phone" value={data.phone} onChange={OnTextChange} maxLength="10" /></td></tr>
                        <tr><td>Pizza Size : </td><td><input type="radio" name="rb" value="Small" onChange={OnTextChange} />Small
                        </td><td><input type="radio" name="rb" value="Medium" onChange={OnTextChange} />Medium
                            </td><td><input type="radio" name="rb" value="Large" onChange={OnTextChange} />Large
                            </td></tr>
                        <tr><td>Crust Type : </td><td>
                            <select name="crust" onChange={OnTextChange}>
                                <option value="0">Select Crust Type</option>
                                {
                                    type.map((data) => {
                                        return (
                                            <option key={data.id} value={data.type}>{data.type}</option>
                                        )
                                    })
                                }
                            </select>
                        </td></tr>
                        <tr><td>Toppings : </td>
                            {
                                toppings.map((top) => {
                                    return (
                                        <td><input type="checkbox" name="top" value={top} onChange={OnTextChange} />{top}</td>)
                                })
                            }
                        </tr>
                        <tr><td>Payment : </td><td>
                            <select name="paymt" onChange={onChangePay}>
                                <option value="0">Select Payment</option>
                                {
                                    pay.map((data) => {
                                        return (
                                            <option key={data.id} value={data.mode}>{data.mode}</option>
                                        )
                                    })
                                }
                            </select>

                        </td></tr>
                        {
                            display
                        }
                        <tr><td>Cost : </td><td><input type="number" name="cost" onChange={OnTextChange} value={data.cost} /> </td></tr>
                        <tr><td><button type="submit" onClick={onSubmitForm}>Order Pizza</button></td></tr>
                    </tbody>
                </table>
            </fieldset>
        </div>

    )
}
