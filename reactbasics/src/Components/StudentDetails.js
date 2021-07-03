import React, { Component } from 'react'
import StudentRecord from './StudentRecord';
export default class StudentDetails extends Component {
    constructor() {
        super();
        this.state = {
            regno: '',
            sname: '',
            mail: '',
            phone: '',
            addr: '',
            bg: 'Select Blood Group',
            deg: ''
        }
        this.onTextChange=this.onTextChange.bind(this);
    }
    onTextChange =(event)=>
    {
        this.setState((prevState)=>{
            return{
                ...prevState,
                [event.target.name]:event.target.value
                
            }
        })
    }
    onSubmit=(event)=>
    {
        this.setState((prev)=>{
            return{
                ...prev,
                [event.target.name]:event.target.value
            }
        })
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <section>
                    <fieldset>
                        <legend>Student Details Form</legend>
                        <table>
                            <tr><td>Enter Register No : </td><td><input type="text" name="regno" value={this.state.regno} onChange={this.onTextChange} /></td></tr>
                            <tr><td>Student Name : </td><input type="text" name="sname" value={this.state.sname} onChange={this.onTextChange} /></tr>
                            <tr><td>Email-Id</td><td><input type="email" name="mail" value={this.state.mail} onChange={this.onTextChange} /></td></tr>
                            <tr><td>Phone No : </td><td><input type="text" name="phone" value={this.state.phone} onChange={this.onTextChange} maxLength="10" /></td></tr>
                            <tr><td>Address : </td><td><textarea name="addr" onChange={this.onTextChange}>{this.state.addr}</textarea></td></tr>
                            <tr><td>Blood Group : </td>
                                <select name="bg" onChange={this.onTextChange}>
                                    <option value="Select Blood Group">Select Blood Group</option>
                                    <option value="O+ve">O+ve</option>
                                    <option value="B+ve">B+ve</option>
                                    <option value="B-ve">B-ve</option>
                                    <option value="AB+ve">AB+ve</option>
                                    <option value="AB-ve">AB-ve</option>
                                    <option value="A+ve">A+ve</option>
                                    <option value="A-ve">A-ve</option>
                                </select></tr>
                            <tr><td>Degree : </td><td><input type="radio" name="deg" value="UG" onChange={this.onTextChange} />UG</td><td><input type="radio" name="deg" value="PG" onChange={this.onTextChange} />PG</td></tr>
                            <tr><td colSpan="2"><input type="submit" value="Submit Data" onClick={this.onSubmit} /></td></tr>
                        </table>
                    </fieldset>
                </section>
                <div>
                <StudentRecord data={this.state.sname}/>
                </div>
            </div>
        )
    }
}
