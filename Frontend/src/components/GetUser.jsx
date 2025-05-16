import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md"
import { TbEdit } from "react-icons/tb";
import axios from 'axios';


export const GetUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
   const fetchdata=async()=>{
     try {
      const resp=await axios.get('http://localhost:8080/api/getall')
      setUsers(resp.data)
    } catch (error) {
      console.log(error)
    }
   }
   fetchdata()
  },[])
  return (
    <>
      <div className="my-10 h-screen bg-gray-50">
        
        {/* Centered Add User Button */}
        <div className="flex justify-center">
          <Link
            className="bg-blue-600 text-white px-4 py-2 rounded-2xl shadow-lg hover:bg-blue-700 transition"
            to="/add"
          >
            Add user
          </Link>
        </div>

        {/* Table with Shadow */}
        <div className="w-3/4 mx-auto my-10 shadow-2xl rounded-lg overflow-hidden">
          <table className="w-full border border-gray-300 border-collapse text-center bg-white">
            <thead>
              <tr className="bg-gray-600">
                <th className="border border-gray-300 px-4 py-2">Sr.No</th>
                <th className="border border-gray-300 px-4 py-2">User Name</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
             {users.map((user,i)=>{
              return(
                 <tr key={user._id}>
                <td className="border border-gray-300 px-4 py-2">{i+1}</td>
                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                 <td className="border border-gray-300 px-4 py-2 space-x-2 flex justify-center">
                  <button className="bg-red-500 cursor-pointer text-white px-3 py-2 rounded hover:bg-red-600 transition text-xl">
                    <MdDelete />
                  </button>
                  <Link to={`/edit/`+user._id} className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 transition text-xl">
                    <TbEdit />
                  </Link>
                </td>
              </tr>
              )
             })}
            </tbody>
          </table>
        </div>

      </div>
    </>
  )
}
