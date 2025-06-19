import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Bag from "./routes/Bag.jsx"
import Home from './components/Home.jsx'
import HomePage from './routes/HomePage.jsx'

const router = createBrowserRouter ([
  {
    path: "",
    element: <App/>,
    children : [
      {
        path:"/",element: <HomePage/> , /*loader:"" */
      },
      {
        path:"/bag",
        element: <Bag/>,/*
        action: " ",*/

      },
    ],

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}/>
  </StrictMode>,
)
