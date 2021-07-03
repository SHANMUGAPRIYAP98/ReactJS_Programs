import React from 'react'
import { useState } from 'react'
import StudentView from './StudentView'
export default function StudentData() {
    var pstud=[],cstud=[];
    const [stud,setStud]=useState({
        regno:'',
        sname:'',
        mail:'',
        phone:'',
        addr:'',
        bg:'Select Blood Group',
        deg:''
      })
     const onTextChange= (event)=>
      {
       const {name,value}=event.target;
        setStud((prevState)=>{
            return{
                ...prevState,
                [name]:value,
            }
            
        })
      }
      const onSubmit=()=>
      {
        console.log("Student Record")
        console.log(stud)
      }
    return (
        <div>
            <section>
                <fieldset>
                    <legend>Student Details Form</legend>
                    <table>
                        <tr><td>Enter Register No : </td><td><input type="text" name="regno"  value={stud.regno} onChange={onTextChange}/></td></tr>
                        <tr><td>Student Name : </td><input type="text" name="sname" value={stud.sname} onChange={onTextChange}/></tr>
                        <tr><td>Email-Id</td><td><input type="email" name="mail" value={stud.mail} onChange={onTextChange}/></td></tr>
                        <tr><td>Phone No : </td><td><input type="text" name="phone" value={stud.phone} onChange={onTextChange} maxLength="10"/></td></tr>
                        <tr><td>Address : </td><td><textarea name="addr" onChange={onTextChange}>{stud.addr}</textarea></td></tr>
                        <tr><td>Blood Group : </td>
                        <select name="bg" onChange={onTextChange}>
                            <option value="Select Blood Group">Select Blood Group</option>
                            <option value="O+ve">O+ve</option>
                            <option value="B+ve">B+ve</option>
                            <option value="B-ve">B-ve</option>
                            <option value="AB+ve">AB+ve</option>
                            <option value="AB-ve">AB-ve</option>
                            <option value="A+ve">A+ve</option>
                            <option value="A-ve">A-ve</option>
                        </select></tr>
                        <tr><td>Degree : </td><td><input type="radio" name="deg" value="UG" onChange={onTextChange}/>UG</td><td><input type="radio" name="deg" value="PG" onChange={onTextChange}/>PG</td></tr>
                      <tr><td colSpan="2"><input type="submit" value="Submit Data" onClick={onSubmit}/></td></tr>
                    </table>
                </fieldset>
            </section>
            <div>
            <StudentView data={stud}/>
            </div>
            
        </div>
    )
}
