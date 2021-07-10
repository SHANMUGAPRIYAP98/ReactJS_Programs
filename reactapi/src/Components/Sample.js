import React,{useEffect} from 'react'

export default function Sample() {
    useEffect(()=>
    {
        console.log("useeeeeeee")
    },[])
    return (
        <div>
            {
                console.log("--------------render------------")
            }
        </div>
    )
}
