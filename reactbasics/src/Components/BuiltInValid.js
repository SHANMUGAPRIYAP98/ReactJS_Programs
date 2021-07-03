import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
export default function BuiltInValid() {
    const validate=Yup.object({
        cname:Yup.string().required("Name is Required * ")
        
    })
    return (
        <div>
            
        </div>
    )
}
