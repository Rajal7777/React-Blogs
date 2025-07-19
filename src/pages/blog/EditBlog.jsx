import React from "react";

import Form from "./component/form/form";
import Navbar from "../../component/navbar/Navbar";

const EditBlog = () => {
  return (
    <div>
      <Navbar />

      <Form type="edit" />
     
    </div>
  );
};

export default EditBlog;
