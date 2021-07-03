import { useFormik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
export default function CustomerDetails() {
    const validationSchema=Yup.object({
        cname:Yup.string().required("Name is Required * ").min(3,"Atleast three Characters Required"),
        phone:Yup.string().min(10,"Only 10 digits Allowed").required("Phone Number is Required * ").max(10,"Only 10 digits Allowed"),
        mail:Yup.string().email("Enter a Valid Mail").required("Email-Id is Required *"),   
        age:Yup.number().required("Age is Required").min(23,"Age must be above > 22").max(50,"Age must be below <50"),
        // loc:Yup.string().required("Location is Required * ").oneOf(location),
        gen:Yup.string().required("Gender is Required * "),
        pass:Yup.string().required("Password is Required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Requires [Abcd@123] Format"),
        lang:Yup.string().required('Atleast One Lang Required'),
        dob:Yup.string().required("Pick a Date").min(new Date("1998-01-01","Your Age is below 23 not Allowed")).max(new Date("1997-01-01","Your Age is above > 50 Not Allowed"))

    })
    const {handleSubmit,handleChange,values,errors}=useFormik({
        initialValues:{
            cname:'',
            phone:'',
            mail:'',
            age:0,
            loc:'',
            pass:'',
            dob:'',
            lang:[]
        },
        validationSchema,
        onSubmit(data){
            console.log(data)
        }
    })
    return (
        <div>
            <form onSubmit={handleSubmit} noValidate>
            <fieldset>
                <legend>Customer Details Form For Job Post</legend>
                <table><tr><td>Customer Name : </td><td><input type="text" name="cname" value={values.cname} onChange={handleChange}/></td><td class="error">{errors.cname?errors.cname:null}</td></tr>
                <tr><td>Phone Number : </td><td><input type="text" name="phone" value={values.phone} onChange={handleChange}/></td><td class="error">{errors.phone?errors.phone:null}</td></tr>
                <tr><td>Email : </td><td><input type="email" name="mail" value={values.mail} onChange={handleChange}/></td><td class="error">{errors.mail?errors.mail:null}</td></tr>
                <tr><td>Gender : </td><td><input type="radio" name="gen" value="male" onChange={handleChange}/>male</td>
                <td><input type="radio" name="gen" value="female" onChange={handleChange}/>female</td>
                <td class="error">{errors.gen?errors.gen:null}</td></tr>
                <tr><td>Date of Birth : </td><td><input type="date" name="dob"  onChange={handleChange}/></td>
                <td class="error">{errors.dob?errors.dob:null}</td></tr>
                <tr><td>Age : </td><td><input type="number" name="age" value={values.age} onChange={handleChange}/></td><td class="error">{errors.age?errors.age:null}</td></tr>   
                <tr><td>Known Languages : </td><td><input type="checkbox" name="lang" value="English" onChange={handleChange}/>English</td>
                <td><input type="checkbox" name="lang" value="Tamil"/>Tamil</td>
                <td><input type="checkbox" name="lang" value="Hindi"/>Hindi</td>
                <td><input type="checkbox" name="lang" value="Others"/>Others</td>
                <td class="error">{errors.lang?errors.lang:null}</td></tr>
                <tr><td>Location : </td><td><select name="loc" onChange={handleChange}>
                    <option value="">Select Location</option>
                    <option></option>
                    </select></td><td class="error">{errors.loc?errors.loc:null}</td></tr>
                    <tr><td>Password for Security : </td><td><input type="password" name="pass" value={values.pass} onChange={handleChange}/></td>
                    <td class="error">{errors.pass?errors.pass:null}</td>
                    </tr>
                    <tr><td><button type="submit">Register</button></td></tr>
                </table>
            </fieldset>
            </form>
        </div>
    )
}
