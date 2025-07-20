import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Input from '../blog/component/Input'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../../config'



const Register = () => {

    const navigate = useNavigate()
  
     const handleRegister = async (data)=>{
      try {
             const response = await axios.post(` ${baseUrl}/register`, data);
             
        if(response.status === 201){
            navigate('/login')
        }else{
            alert("Resgistration failed")
        }
      } catch(error){
        alert(error?.response?.data?.message)
      }
     }
    
    return (
        <>
            <Navbar />
            <Input type="Register" onSubmit={handleRegister} />

        </>
    )
}

export default Register

