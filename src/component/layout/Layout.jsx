import React from 'react';
import Navbar from '../navbar/Navbar';
import Card from '../../pages/blog/component/card/Card';




const Layout = () => {
  return (
     <>
      <Navbar />
      <div className='flex flex-wrap justify-center space-x-5 mt-8' >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
      </>
  )
}

export default Layout