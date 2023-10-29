import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './Routes/Routes.jsx';
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AuthProvide from './Provider/AuthProvide.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvide>
    <RouterProvider router={router} />
    </AuthProvide>
  </React.StrictMode>,
)
