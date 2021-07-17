import React,{useEffect,useState} from 'react';
import Table from 'react-table'
export default function ViewStudent() {
    const columns = [
        {
            Header: 'Register No',
            accessor: 'regno'
        },
        {
            Header: 'Student Name',
            accessor: 'sname'
        },
        {
            Header: 'Email-Id',
            accessor: 'mail'
        },
        {
            Header: 'Address',
            accessor: 'addr'
        },
        {
            Header: 'Phone Number',
            accessor: 'phone'
        },
        {
            Header: 'Degree',
            accessor: 'rb'
        }
    ]
    var display;
    var url="http://localhost:5000/students"
    const [stud,setStud]=useState([])
    useEffect(()=>
    {
        fetch(url).then(res=>res.json()).then((data)=>
        {
            setStud(data)
        })
    },[])
    return (
        <div>
             {/* <Table data={stud} columns={columns}    defaultPageSize = {2}  
            pageSizeOptions = {[2,4, 6]}  /> */}
        </div>
    )
}
