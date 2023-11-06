import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddBlog = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    image: "",
  });

  const handleChange = (event) => {
    setInputs((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value,
    }));
  };

  const sendRequest = async (type = "signin") => {
    const res = await axios
      .post("http://localhost:8000/api/blog/add", {
        title: inputs.title,
        content: inputs.content,
        image: inputs.image,
        user: localStorage.getItem("userId"),
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/"));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg p-6 rounded-lg w-2/3">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Create your blog...</h2>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={inputs.title}
          placeholder="Title"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <textarea
          cols={20}
          rows={10}
          name="content"
          onChange={handleChange}
          value={inputs.content}
          placeholder="Body"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          name="image"
          onChange={handleChange}
          value={inputs.image}
          placeholder="Image URL"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <button
          className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
