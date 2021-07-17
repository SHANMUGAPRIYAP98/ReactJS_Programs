import React from 'react'
import { useState } from 'react';
import axios from 'axios';
export default function EditStud() {
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
      var id=data.regno;
      var dbUrl="http://localhost:5000/students"
      const onSubmit=()=>
      {
        axios.put(`${dbUrl}/${id}`,data).then(res=>res.data).then((data)=>
        {
            console.log(data)
        })
      }
      function onDeleteStud()
      {
          axios.delete(`${dbUrl}/${id}`).then(res=>res.data).then((data)=>
          {
            console.log(data)
          })
      }
    return (
        <div>
        <div className="form-group">
        <section>
        <div className="card" id="d2">
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
                       <div> <button type="submit" onClick={onSubmit} style={{backgroundColor:'grey'}} id="but">Edit Student</button></div>
                       <div>  <button type="submit" onClick={onDeleteStud} style={{backgroundColor:'grey'}} id="buts">Delete Student</button></div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    </div>
    )
}
