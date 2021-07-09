import React from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.css';
export default function StudentView(props) {
    return (<div>
           <h2>Student Details Preview</h2>
           <Table striped hover size="sm" id="stud">
            <thead><tr><th>REGISTER NO </th><th>Student Name</th><th>EMAIL</th>
            <th>PHONE NO</th><th>ADDRESS</th><th>BLOOG GRP</th><th>DEGREE</th><th>SUBJECTS</th></tr></thead>
            <tbody><tr><td>{props.data.regno}</td><td>{props.data.sname}</td><td>{props.data.mail}</td>
            <td>{props.data.phone}</td><td>{props.data.addr}</td><td>{props.data.bg}</td><td>{props.data.deg}</td>
           <td>{props.data.lang}</td></tr></tbody>
           </Table>
           </div>
    )
}
