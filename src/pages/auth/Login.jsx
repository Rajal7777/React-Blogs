import React, { use } from 'react'
import Navbar from '../../component/navbar/Navbar'
import Input from '../blog/component/Input'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import { baseUrl } from '../../config'



const Login = () => {
   
     const navigate = useNavigate()
      const handleLogin = async (data)=>{
        try {
            const response  = await axios.post(`${baseUrl}/login`,data)
        if(response.status === 200){
           localStorage.setItem('token',response.data.token )
                navigate('/login')
        }else{
            alert("Registration Failed")
        }
        }catch (error){
            alert(error?.response?.data?.message)
        }
    }
    return (
        <>
         <Navbar />
        <Input type="login" onSubmit={handleLogin}/>
        </>
    )
}

export default Login