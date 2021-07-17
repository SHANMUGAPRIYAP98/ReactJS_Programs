import React from 'react'
import { useEffect,useState} from 'react'
export default function EditStudent() {
    var url="http://localhost:5000/students"
    const [view,setView]=useState()
    var dis;
    var status;
    const [update,setUpdate]=useState([])
    useEffect(()=>
    {
        fetch(url).then(res=>res.json()).then((data)=>
        {
            setUpdate(data);
            if(data!=null)
            {
                dis=<table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Register No</th>
                    <th scope="col">Student Name</th>
                    <th scope="col">Email-Id</th>
                    <th scope="col">Degree</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone Number</th>
                  </tr>
                </thead>
                <tbody>
                
                     {
                         data.map((val)=>
                         {
                             return(
                               <tr>
                                   <td>{val.regno}</td>
                                   <td>{val.sname}</td>
                                   <td>{val.mail}</td>
                                   <td>{val.rb}</td>
                                   <td>{val.addr}</td>
                                   <td>{val.phone}</td>
                               </tr>
                             )
                         })
                     }
                </tbody>
              </table>
              
            }
            setView(dis)
        })
    },[])
    return (
        <div>
            {view}
        </div>
    )
}
