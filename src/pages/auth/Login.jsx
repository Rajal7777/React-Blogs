import React, { use } from 'react'
import Navbar from '../../component/navbar/Navbar'
import Input from '../blog/component/Input'
import { useNavigate } from 'react-router-dom'
// import Navbar from '../../components/navbar/Navbar'

const Login = () => {
     const navigate = useNavigate()
      const handleLogin = async (data)=>{
        try {
            const response  = await axios.post("https://react30.onrender.com/api/user/login",data)
        if(response.status === 200){
                navigate('/')
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