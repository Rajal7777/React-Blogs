import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Input from '../blog/component/Input'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const navigate = useNavigate()
    const handleRegister = async (data)=>{
    try {
        const response  = await axios.post("https://react30.onrender.com/api/user/register",data)
     if(response.status === 200){
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
           <Input type="Register" onSubmit={handleRegister}/>
            
        </>
    )
}

export default Register

