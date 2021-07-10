import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {Observable} from 'rxjs';
export default function WebinarFormAPI() {
    const dept = ["Finance", "IT", "HR"]
    const [data, setData] = useState({
        eid:'',
        fname: '',
        lname: '',
        mail: '',
        addr: '',
        zip: '',
        statesIN: 0,
        phone: '',
        dept: '',
        org: ''
    })
    const onDataChange = (event) => {
        const { name, value } = event.target;
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const [states, setState] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4000/States").then(res => res.data).then((data) => {
            setState(data)
        }).catch((err)=>
        {
            console.log(err)
        }).finally(()=>
        {
            console.log("I am in Finally Block")
        })
    }, [])
    var disCities,dis;
    var arr=[]
    if (data.statesIN ==="TamilNadu") {
        disCities = <div><select name="cities"><option value="0">Select City</option>
            {
                states.filter((d) => {
                    if (d.name === "TamilNadu") {
                        d.cities.map((x) => {
                        //    arr.push(x);
                        console.log(x)
                      
                  })
                //   console.log(arr)
                //   arr.map((x)=>{
                //     dis=<select>
                //         <option value="0">Select City</option>
                //         {
                //             <option value={x}>{x}</option>
                //         }
                //     </select>
                //   })
                }
            })
        }
            
        </select></div>
    }
    else if (data.statesIN === "Kerala") {
        disCities = <div><select name="cities"><option value="0">Select City</option>
            {
                states.filter((d) => {
                    if (d.name === "Kerala") {
                        d.cities.map((x) => {
                            console.log(x)
                           return(
                               <option>{x}</option>
                           )
                        })
                    }

                })
            }
        </select></div>
    }
    else if (data.statesIN === "Gujarat") {
        disCities = <div><select name="cities"><option value="0">Select City</option>
            {
                states.filter((d) => {
                    if (d.name === "Gujarat") {
                        d.cities.map((x) => {
                            console.log(x)
                           return(
                               <option>{x}</option>
                           )
                        })
                    }

                })
            }
        </select></div>
    }
    else if (data.states === "Andhra Pradesh") {
        disCities = <div><select name="cities"><option value="0">Select City</option>
            {
                states.filter((d) => {
                    if (d.name === "Andhra Pradesh") {
                        d.cities.map((x) => {
                            console.log(x)
                           return(
                               <option>{x}</option>
                           )
                        })
                    }

                })
            }
        </select></div>
    }
    else if (data.states === "Karnataka") {
        disCities = <div><select name="cities"><option value="0">Select City</option>
            {
                states.filter((d) => {
                    if (d.name === "Karnataka") {
                        d.cities.map((x) => {
                            console.log(x)
                           return(
                               <option>{x}</option>
                           )
                        })
                    }

                })
            }
        </select></div>
    }
    var dbUrl=" http://localhost:4000/WebinarData"
    const onDataSubmit=()=>
    {
        const headers={
            "name":"shanmuga priya",
            "id":"A2939"
        }
        axios.post(dbUrl,data,{headers}).then(res=>res.data).then((data)=>{

            console.log("Form Submitted Successfully");
            console.log(data)
        }).catch((err)=>
        {
            console.log(err)
        }).finally(()=>
        {
            console.log("I am in Finally Block")
        })
    }
    var display;
    var [print,setPrint]=useState()
    const fetchAll=()=>
    {
        axios.get(dbUrl).then(res=>res.data).then((dt)=>{
            console.log(dt)
            display=<table id="web">
                <thead><tr><th>Employee Id</th><th>First Name</th><th>Last Name</th><th>Mail</th>
                <th>Address</th><th>Zip Code</th><th>State</th><th>Phone</th><th>Department</th>
                <th>Organisation</th></tr></thead>
                {
                    dt.map(data=>{
                        return(
                            <tbody><tr><td>{data.eid}</td><td>{data.fname}</td><td>{data.lname}</td><td>{data.mail}</td>
                            <td>{data.addr}</td><td>{data.zip}</td><td>{data.statesIN}</td><td>{data.phone}</td><td>{data.dept}</td>
                            <td>{data.org}</td></tr></tbody>
                        )
                    })
                }
               
               </table>
        })
        setPrint(display)
    }
    var id=data.eid;
    const onDataUpdate=()=>
    {
        console.log(data)
         axios.put(`${dbUrl}/${id}`,data).then(res=>console.log(res))

    }





    return (
        <div>
            <fieldset>
                <legend>Webinar Registration Form</legend>
                <table>
                    <tr><td><input type="text" name="eid" value={data.eid} onChange={onDataChange} placeholder="Employee Id"/></td></tr>
                    <tr><td><input type="text" name="fname" value={data.fname} placeholder="First Name" onChange={onDataChange} /></td><td><input type="text" value={data.lname} name="lname" placeholder="Last Name" onChange={onDataChange} /></td></tr>
                    <tr><td><input type="email" name="mail" value={data.mail} placeholder="Email Address" onChange={onDataChange} /></td></tr>
                    <tr><td><input type="text" name="addr" placeholder="Address" onChange={onDataChange} value={data.addr} /></td><td><input type="text" name="zip" placeholder="Zip Code" maxLength="6" onChange={onDataChange} value={data.zip} /></td></tr>
                    <tr><td><select name="statesIN" onChange={onDataChange}>
                        <option value="0">Select State</option>
                        {
                            states.map((x) => {
                                return (
                                    <option key={x.id} value={x.name}>{x.name}</option>)
                            })
                        }
                    </select></td><td></td></tr>
                    <tr><td><input type="text" name="phone" value={data.phone} onChange={onDataChange} placeholder="Phone Number" maxLength="10"/></td></tr>
                    <tr><td><select name="dept" onChange={onDataChange}>
                        <option value="0">Select Department</option>
                        {
                            dept.map((data) => {
                                return (
                                    <option value={data}>{data}</option>
                                )
                            })
                        }
                    </select></td><td>{}</td></tr>
                    <tr><td><input type="text" name="org" placeholder="Organisation Name" value={data.org} onChange={onDataChange} /></td></tr>
                    <tr><td><button type="submit" onClick={onDataSubmit} >Submit</button></td>
                    <td><button type="submit" onClick={fetchAll}>Fetch All</button></td>
                    <td><button type="submit" onClick={onDataUpdate}>Update</button></td>
                    
                    </tr>

                </table>
            
            </fieldset> hello
         {
             print
         }
        </div>
    )
}
