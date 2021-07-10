import React,{useEffect,useState} from 'react'
import { fromFetch } from "rxjs/fetch";
import { ajax } from 'rxjs/ajax';
export default function WebFormRxJS() {
    var dbUrl=" http://localhost:4000/WebinarData"
    const [response,setResponse]=useState();
     useEffect(()=>
    {
       ajax.getJSON(dbUrl).subscribe((data)=>
       {
            console.log(data);
            setResponse(data);
           
       })
    },[])
    return (
        <div>
         {
            JSON.stringify(response)
         }
        </div>
    )
}
