import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {dologin} from '../../src/Store/actions/AuthAction'



export default function UseLogin() {
    const dispatch = useDispatch()
    
   
    const [secureText, setsecureText] = useState(true)
    const [isinvalid, setisinvalid] = useState(null)
    const [loading, setloading] = useState(false)
    

  const doSigninUser = (values)=>{
    
    
   
        dispatch(dologin(values.email,values.password,setisinvalid,setloading))
        
               
   
       }

    return [isinvalid,loading,doSigninUser,setsecureText,secureText]
}