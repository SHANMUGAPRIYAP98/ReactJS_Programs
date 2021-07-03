import React from 'react'
import './Common.css'
export default function NameTime() {
    var uname="Diyashri Nagaraj";
    var dte=new Date();
    var s1={color:"red",backgroundColor:"grey"}
    var s2={color:"blue",backgroundColor:"lightBlue"}
    var s3={color:"brown"}
    return (
        <div>
            <fieldset>
                <legend>Username and DateTime Component</legend>
                <table>
                <tbody>
                <tr><td>Name : </td><td><input type="text" name="uname" value={uname} style={s1} readOnly/></td></tr>
                <tr><td>DateTime :</td><td><input type="text" name="dte" value={dte.toString()} style={s2} readOnly/></td></tr>
                <tr><td>UserName : </td><td><label style={s3}>{uname}</label></td></tr>
                <tr><td>Date-Time : </td><td><label style={s3}>{dte.toString()}</label></td></tr>
                </tbody>
                </table>
            </fieldset>
            
        </div>
    )
}
