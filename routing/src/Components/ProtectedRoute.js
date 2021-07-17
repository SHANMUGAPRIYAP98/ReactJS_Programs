
import React,{useEffect} from 'react'
import { Route, Redirect} from 'react-router-dom'
export default function ProtectedRoute(props) {
    // var component=props.Component;
    // var his=useHistory()
    // useEffect(()=>
    // {
    //     if(!localStorage.getItem("login-data"))
    //     {
    //         his.push('/login')
    //     }
    // })
    // const auth={
    //     isLoggedIn:false,
    //     onAuthenticated()
    //     {
    //         this.isLoggedIn=true;
    //     },
    //     getLoggedInStatus()
    //     {
    //         return this.isLoggedIn;
    //     }
    // }
    return (
        <div>
          {/* <component /> */}
          <Route path={props.path}  render={data=>data.getLoggedInStatus?(<props.component {...data}></props.component>) : (<Redirect to={{pathname:'/login' }}></Redirect>)}></Route>
        
        </div>
    )
}
