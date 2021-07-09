import React, { Component } from 'react'
import WebinarForm from './WebinarFormData'
export default class WebinarFormData extends Component {
    states=["TamilNadu","Kerala","Andhra Pradesh","Karnataka","Gujarat"]
    tncities=["Chennai","Coimbatore","Madurai","Salem","Tiruppur"]
    kcities=["Kochi","Kozhikode","Palakkad","Kottayam","Munnar"]
    kacities=["Bangalore","Mysore","Vijayapura","Gulbarga","Hubli"]
    adcities=["Tirupati","Vijayawada","Vizag","Hyderabad","Kurnool"]
    gucities=["Ahmedabad","Surat","Rajkot","Bhavnagar","Vadodara"]
    dept=["Finance","IT","HR"]
    constructor(props)
    {
        super(props);
        this.state={
            fname:'',
            lname:'',
            mail:'',
            addr:'',
            zip:'',
            states:0,
            cities:0,
            phone:'',
            dept:0,
            org:''
        }
        this.onDataChange=this.onDataChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onDataChange(event)
    {
        this.setState((prev)=>
        {
            return{
                ...prev,
                [event.target.name]:event.target.value
            }
        })
    }
    onSubmit()
    {
        this.props.onChildFunc(this.state)
    }
    render() {
       var data=this.state;
       const  val=this.state.states;
       if(val==="TamilNadu")
       {
         var  cities=<select name="cities" onChange={this.onDataChange}>
               <option value="0">Select City</option>
               {
                   this.tncities.map((x)=>
                   {
                       return(
                       <option value={x}>{x}</option>)
                   })
               }
           </select>
       }
       else  if(val==="Kerala")
       {
         var  cities=<select name="cities" onChange={this.onDataChange}>
               <option value="0">Select City</option>
               {
                   this.kcities.map((x)=>
                   {
                       return(
                       <option value={x}>{x}</option>)
                   })
               }
           </select>
       }
       else  if(val==="Karnataka")
       {
         var  cities=<select name="cities" onChange={this.onDataChange}>
               <option value="0">Select City</option>
               {
                   this.kacities.map((x)=>
                   {
                       return(
                       <option value={x}>{x}</option>)
                   })
               }
           </select>
       }
       else  if(val==="Andhra Pradesh")
       {
         var  cities=<select name="cities" onChange={this.onDataChange}>
               <option value="0">Select City</option>
               {
                   this.adcities.map((x)=>
                   {
                       return(
                       <option value={x}>{x}</option>)
                   })
               }
           </select>
       }
       else  if(val==="Gujarat")
       {
         var  cities=<select name="cities" onChange={this.onDataChange}>
               <option value="0">Select City</option>
               {
                   this.gucities.map((x)=>
                   {
                       return(
                       <option value={x}>{x}</option>)
                   })
               }
           </select>
       }
       
        return (
            <div>
                <fieldset>
                    <legend>Webinar Registration Form</legend>
                        <table>
                            <tr><td><input type="text" name="fname" value={this.state.fname} placeholder="First Name" onChange={this.onDataChange}/></td><td><input type="text" value={this.state.lname} name="lname" placeholder="Last Name" onChange={this.onDataChange}/></td></tr>
                            <tr><td><input type="email" name="mail" value={this.state.mail} placeholder="Email Address" onChange={this.onDataChange}/></td></tr>
                            <tr><td><input type="text" name="addr" placeholder="Address" onChange={this.onDataChange} value={this.state.addr}/></td><td><input type="number" name="zip" placeholder="Zip Code" maxLength="6" onChange={this.onDataChange} value={this.state.zip}/></td></tr>
                            <tr><td><select name="states" onChange={this.onDataChange}>
                            <option value="0">Select State</option>    
                            {
                                this.states.map((x)=>
                                {
                                    return(
                                    <option value={x}>{x}</option>)
                                })
                            }
                            </select></td><td>{cities}</td></tr>
                            <tr><td><input type="text" name="phone" value={this.state.phone} onChange={this.onDataChange} placeholder="Phone Number"/></td></tr>
                            <tr><td><select name="dept" onChange={this.onDataChange}>
                                <option value="0">Select Department</option>
                               {
                                   this.dept.map((data)=>
                                   {
                                       return(
                                           <option value={data}>{data}</option>
                                       )
                                   })
                               }
                                </select></td></tr>
                                <tr><td><input type="text" name="org" placeholder="Organisation Name" value={this.state.org} onChange={this.onDataChange} /></td></tr>
                               <tr><td><button type="submit" onClick={this.onSubmit}>Submit</button></td></tr>
                        </table>
                </fieldset>
               
            </div>
        )
    }
}
