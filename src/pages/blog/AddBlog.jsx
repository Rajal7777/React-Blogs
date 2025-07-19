import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Form from './component/form/form'


const AddBlog = () => {
  return (
    <div>
      <Navbar />
   
      <Form  type='Add blog' />
    </div>
  )
}

export default AddBlog