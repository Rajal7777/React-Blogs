import React, { useState } from "react";

const Form = ({ type, onSubmit }) => {
  const [data, setData] = useState({
    title: '',
    subtitle: '',
    description: '',
    image: '',
    category: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: name === 'image' ? e.target.files[0] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(data)
    console.log(e)
  }
  console.log(data)
  return (
    <div>
      <div className="flex justify-center items-center w-screen h-screen bg-pink-300">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl mt-10 ml-32" >
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl">
                <br />
                {type === "Add blog" ? 'Create New Blog' : 'Edit Your Blog'}
              </h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">

                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="title"
                  name="title"
                  onChange={handleChange}
                  required
                />

                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="subtitle"
                  name="subtitle"
                  required
                  onChange={handleChange}
                />

                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="file" name="image" onChange={handleChange}
                />

                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="description*"
                  name="description"
                  required
                  onChange={handleChange}

                />

              </div>
              <div className="my-4">
                <textarea
                  placeholder="Message*"
                  name="category"
                
                  required
                  onChange={handleChange}
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <div className="my-2 w-80  ">
                <button type="submit"
                  className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
                >
                  {type === 'Add blog' ? 'Create Blog' : 'Edite your Blog'}
                </button>
              </div>
            </form>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Form;
