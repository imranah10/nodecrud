import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoCaretBackCircle } from "react-icons/io5";
import axios from 'axios';
import toast from 'react-hot-toast';

export const Edit = () => {
  const [user, setUsers] = useState({
    name: "",
    email: "",
    password: ""
  });

  const { id } = useParams();
  const navigate=useNavigate()

  const handlechange = (e) => {
    const { name, value } = e.target;
    setUsers({ ...user, [name]: value });
    console.log(user);
  };
  useEffect(()=>{
    const getOne=async()=>{
      try {
        const res=await axios.get(`http://localhost:8080/api/getone/${id}`)
        setUsers(res.data)
      } catch (error) {
        console.log(error);
        
      }
    }
    getOne()
  },[id])

const SubmitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/update/${id}`, user);
      toast.success('User update successfully!');
      // Reset form
      setUsers({ name: '', email: '', password: '' });
      navigate('/')
    } catch (error) {
      toast.error('Failed to add user!');
      console.log(error);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center px-4">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            className="bg-blue-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300 flex items-center gap-2"
            to="/"
          >
            <IoCaretBackCircle className="text-2xl" />
            Back
          </Link>
        </div>

        {/* Card Container */}
        <div className="w-full max-w-lg bg-white shadow-2xl rounded-3xl p-8">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Update User</h2>

          <form className="space-y-6" onSubmit={SubmitForm}>
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handlechange}
                value={user.name}
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handlechange}
                value={user.email}
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter a strong password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handlechange}
                value={user.password}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <input
                type="submit"
                value="Update"
                className="w-1/2 bg-blue-600 text-white font-semibold py-2 rounded-full hover:bg-blue-700 transition duration-300 cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
