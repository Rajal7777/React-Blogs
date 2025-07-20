import React, { cache } from 'react'
import Navbar from '../../component/navbar/Navbar'
import Form from './component/form/form'

import axios from 'axios'
import { baseUrl } from '../../config'
import { useNavigate } from 'react-router-dom'



const AddBlog = () => {
  const navigate = useNavigate()
  const handleAddBlog = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/blog`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": localStorage.getItem('token')
        }
      })
      if (response.status === 201) {
        navigate('/')
      } else {
        alert("something went wrong")
      }
    } catch (error) {
      alert(error?.response?.data?.message)
    }
  }


  return (
    <div>
      <Navbar />

      <Form type='Add blog' onSubmit={handleAddBlog} />
    </div>
  )
}

export default AddBlog