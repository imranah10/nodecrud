import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoCaretBackCircle } from "react-icons/io5";
import axios from 'axios';
import toast from 'react-hot-toast';

export const Add = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate=useNavigate()

  const handlechange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const SubmitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://nodecrud-mtqo.onrender.com/api/create', user);
      toast.success('User added successfully!');
      // Reset form
      setUser({ name: '', email: '', password: '' });
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
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Add New User</h2>

          <form onSubmit={SubmitForm} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={user.name}
                placeholder="Enter your name"
                onChange={handlechange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={user.email}
                placeholder="Enter your email"
                onChange={handlechange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={user.password}
                placeholder="Enter a strong password"
                onChange={handlechange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <input
                type="submit"
                value="Submit"
                className="w-1/2 bg-blue-600 text-white font-semibold py-2 rounded-full hover:bg-blue-700 transition duration-300 cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
