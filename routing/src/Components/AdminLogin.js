import React from 'react'
import { useState,useEffect } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import swal from 'sweetalert'
import styling from './styling.css'
export default function AdminLogin() {
    const his=useHistory()
    const [auth,setAuth]=useState({
        isLoggedIn:false
    })
    const [text,setText]=useState({
        uname:'',
        pass:''
    })
    const onTextChange=(event)=>
    {
        const {name,value}=event.target;
        setText((prev)=>
        {
            return{
                ...prev,
                [name]:value
            }
        })
    }
    var dbUrl="http://localhost:4000/login"
    const onSubmit=()=>
    {
        
        fetch(dbUrl).then(res=>res.json()).then((data)=>
        {
           data.map((x)=>
           {
               if(x.uname==text.uname&&x.pass==text.pass)
               {
                   setAuth({
                       isLoggedIn:true
                   })
                   
                // if(auth.onAuthenticated())
                // {
                //   his.push('/dashboard')
                // }
                   swal("Login Successful","","success")
                   
               }
               else
               {
                   swal("Check Username or Password","","error")
               }
               localStorage.setItem("login-data",JSON.stringify(data))
           })
         
        })
    }
    return (
        <div>
            <section>
                <div className="card">
                    <div className="card-body" style={{backgroundColor:'cadetblue'}}>
                        <div className="col-sm-10">
                            <label>Username : </label>
                            <input type="email" className="form-control" name="uname" onChange={onTextChange} value={text.uname}/>
                        </div>
                        <div className="col-sm-10">
                            <label>Password : </label>
                            <input type="password" className="form-control" name="pass" onChange={onTextChange} value={text.pass}/>
                        </div>
                        <button type="submit" className="btn btn-warning" id="b1" onClick={onSubmit} >Login</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
