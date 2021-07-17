import React from 'react'
import {useState} from 'react'
import { Redirect } from 'react-router-dom';
import styling from './styling.css'
export default function AddStudent() {
    const [data,setData]=useState({
      regno:'',
      sname:'',
      mail:'',
      addr:'',
      phone:'',
      rb:''
    })
    function onDataChange(event)
    {
        const {name,value}=event.target;
        setData((prev)=>
        {
            return{
                ...prev,
                [name]:value
            }
        })
    }
    var url="http://localhost:5000/students";
    const [httpStatus,setHttpStatus]=useState()
    const onSubmit=()=>
    {
        const response={
             method:"POST",
             headers:{
             "Content-Type":"application/json"},
             body:JSON.stringify(data)
        }
        fetch(url,response).then(res=>res.json()).then((data)=>
        {
            console.log(data)
        }).catch((e)=>
        {
            console.log(e)
        }).finally(()=>
        {
            console.log("Finally Block")
        })
    }
    return (
        <div>
            <div className="form-group">
            <section>
            <div className="card" id="d1">
                    <div className="card-body">
                        <div className="col-sm-10">
                         <label>Register No</label>
                         <input type="text" name="regno" onChange={onDataChange}/>   
                        </div>
                        <div className="col-sm-10">
                        <label>Student Name</label>
                         <input type="text" name="sname" onChange={onDataChange}/>   
                        </div>
                        <div className="col-sm-10">
                        <label>Email-Addres</label>
                         <input type="email" name="mail" onChange={onDataChange}/>   
                        </div>
                        <div className="col-sm-10">
                        <label>Address</label>
                         <textarea name="addr" onChange={onDataChange}></textarea> 
                        </div>
                        <div className="col-sm-10">
                        <label>Phone Number</label>
                         <input type="text" name="phone" onChange={onDataChange}/>   
                        </div>
                        <div className="col-sm-10">
                        <label>Degree </label>
                        <input type="radio" name="rb" value="UG" onChange={onDataChange}/>UG
                        <input type="radio" name="rb" value="PG" onChange={onDataChange}/>PG
                        </div>
                        <div className="col-sm-10">
                            <button type="submit" onClick={onSubmit} style={{backgroundColor:'grey'}} id="but">Add Student</button>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </div>
    )
}
