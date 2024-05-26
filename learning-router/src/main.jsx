import React from 'react'
// import './App.css'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/root'
import Contact from './routes/contact'
import ErrorPage from './ErrorPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider 
    router={createBrowserRouter([
      {
        path: '/',
        element: <Root/>,
        errorElement : <ErrorPage/>,

        // children:[
        //   {
        //     path: '/',
        //     element: <h1>This is our home page</h1>
        //   },
        //   {
        //     path: '/about',
        //     element: <h1>This is our about page</h1>
        //   }
        // ] 
        children:[{
          path: '/contacts/:contactId',
          element: <h1><Contact/></h1>
        }]
      },

    ])}/>
  </React.StrictMode>,
)
