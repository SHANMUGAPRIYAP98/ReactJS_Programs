import React, { Component } from 'react'
import SignUpDetails from './SignUpDetails';
export default class CustClass extends Component {
    a={name:"aaa",age:21}
    constructor()
    {
        super();
        this.state={
           uname:'',
           mail:'',
           phone:'',
           pwd:'',
           cpwd:''
        }
        this.onTextChange=this.onTextChange.bind(this);
    }
    onTextChange = (event)=>
    {
        this.setState((prev)=>{
            return{
                ...prev,
                [event.target.name]:event.target.value
            }
     
        });
    }   
    signup;
    val;
    onSubmit=(event)=>
    {
        event.preventDefault();
        // this.val=document.getElementById('uname').value;
        // document.getElementById('getname').value=this.val
        console.log(this.val)
        var pwd=this.state.pwd;
        var cpwd=this.state.cpwd;
        var pdata=[],cpdata=[];
        var pass=0,cpass=0;
        for(let i=0;i<pwd.length;i++)
        {
           pdata=pwd.charCodeAt(i)+32; 
           pass=pass+pdata;
           this.state.pwd=pass;
        }
        for(let i=0;i<cpwd.length;i++)
        {
           cpdata=cpwd.charCodeAt(i)+32;
           cpass+=cpdata;
           this.state.cpwd=cpass;
           
        }
        if(pass==cpass)
        {
            console.log("Password Matched")
            console.log(this.state);
            // this.signup = 
            // <SignUpDetails name= {this.state.uname} mail={this.state.mail} mobile={this.state.phone} pwd={this.state.pwd}/>
        }
        else
        {
            console.log("Password Mismatched")
        }
        
        this.setState(prev=>{
            return {
                ...prev,
                name:"aaaa"
            }
        });
     
    }
    canDisplay=true;
    render() {
        return (
            <div>
                <h1>Sign Up Form</h1>
                <form onSubmit={this.onSubmit}>
                    <table id="t1">
                        <tbody>
                          {this.state.uname}-{this.state.mail}
                            <tr><td>Username : </td><td><input type="text" name="uname" id="uname" value={this.state.uname} onChange={this.onTextChange} required /></td></tr>
                            <tr><td>Email-Id : </td><td><input type="email" name="mail" id="mail" value={this.state.mail} onChange={this.onTextChange} required /></td></tr>
                            <tr><td>Mobile No : </td><td><input type="text" name="phone" id="phone" value={this.state.phone}  maxLength="10" onChange={this.onTextChange} required /></td></tr>
                            <tr><td>Password : </td><td><input type="password" name="pwd" id="pwd" value={this.state.pwd} onChange={this.onTextChange} required /></td></tr>
                            <tr><td>Confirm Password : </td><td><input type="password" name="cpwd" value={this.state.cpwd} onChange={this.onTextChange} id="cpwd" required /></td></tr>
                            <tr><td colSpan="2"><button type="submit">signup</button></td></tr>
                         
                        </tbody>
                    </table>
                    </form>
                <input type="text" id="getname" />
              
             {
             
              this.canDisplay && <SignUpDetails name= {this.state.uname} mail={this.state.mail} mobile={this.state.phone} pwd={this.state.pwd} obj={this.a}/>
             }
    
         <div>hello{this.val}</div>
            </div>
         
        )
    }
}