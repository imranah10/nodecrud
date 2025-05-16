import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { GetUser } from './components/GetUser'
import { Add } from './components/Add'
import { Edit } from './components/Edit'

export const App = () => {
  const route=createBrowserRouter([
    {
      path:'/',
      element:<GetUser/>
    },
     {
      path:'/add',
      element:<Add/>
    },
     {
      path:'/edit/:id',
      element:<Edit/>
    },
  ])
  return (
    <>
   
    <RouterProvider router={route}/>

    

    </>
  )
}
