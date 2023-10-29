import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import AddEvent from "../Pages/Home/AddEvent/AddEvent";
import PageNotFound from "../Pages/ErrorPage/PageNotFound";



const router = createBrowserRouter([
    {
      path: "/",                            
      element: <Main></Main>,
      errorElement:<PageNotFound></PageNotFound>,
      children:[
        {
            path:'/', 
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:5000/volunteers')
        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"singup",
          element:<SingUp></SingUp>
        },
        {
          path:"addevent",
          element:<AddEvent></AddEvent>
        },
        
      ]
    },
  ]);

  export default router