import React from 'react'
import {useState,useEffect} from 'react'

export default function Dropdown() {
    const [crust,setCrust]=useState([])
    const onDataUpdate=(event)=>
    {
       setCrust(event.target.value)
    }
    useEffect(()=>
    {
        fetch("http://localhost:3001/crustType").then(res=>res.json()).then((data)=>
        {
            console.log(data)
            setCrust(data)
        })
    },[])
    return (
        <div>
            <select name="Crust" onChange={onDataUpdate}>
                <option value="">Select the Crust</option>
                {
                    crust.map((x)=>
                    {
                        return(
                            <option key={x.id} value={x.type}>{x.type}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}
