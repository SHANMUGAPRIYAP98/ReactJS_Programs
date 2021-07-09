import React from 'react'
import { useEffect,useState } from 'react'
export default function AccountDB() {
    var dbUrl="http://localhost:4000/account";
   
    // useEffect(()=>
    // {
        
    // },[])
    const [acc,setAcc]=useState({
        id:'',
        cname:'',
        accno:''
    })
    function onTextChange(event)
    {
        const {name,value}=event.target;
        setAcc((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }
   
    function onSubmit()
    {
        const sendData={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(acc)
        }
        console.log(acc)
        fetch(dbUrl,sendData).then((data)=>data.json).then((res)=>{
            console.log(res)
        })
    }
    // useEffect(()=>
    // {
    //   fetch(dbUrl).then(data=>data.json()).then((data)=>
    //   {
    //       console.log(data)
    //   })
    // })
    function onFetch()
    {
        fetch(dbUrl).then(data=>data.json()).then((x)=>
        {
            console.log(x)
        }).catch((e)=>
        {
            console.log(e)
        }).finally(()=>
        {
            console.log("Finally Block")
        })
    }
    const onUpdate=function()
    {
        const set={
            method:"POST",
            headers:{
                "Content-Type":"application/json"  
            },
            body:JSON.stringify(acc)
        }
        console.log(`${dbUrl}/${acc.id}`);
        console.log(acc)
        fetch(`${dbUrl}/${acc.cid}`,set).then(res=>res.json()).then((data)=>
        {
            console.log(data)
        })
    }
    return (
        <div>
            <section>
                <table>
                    <tbody><tr><td>Cust Id : </td><td><input type="text" name="id" onChange={onTextChange}/></td></tr>
                    <tr><td>Cust Name : </td><td><input type="text" name="cname" onChange={onTextChange}/></td></tr>
                    <tr><td>Account Number : </td><td><input type="text" name="accno" onChange={onTextChange}/></td></tr>
                    <tr><td><button type="submit" onClick={onSubmit}>click</button></td></tr>
                    <tr><td><button type="submit" onClick={onFetch}>GET</button></td></tr>
                    <tr><td><button type="submit" onClick={onUpdate}>UPDATE</button></td></tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}
