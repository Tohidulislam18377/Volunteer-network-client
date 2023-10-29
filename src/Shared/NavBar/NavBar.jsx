import { Link } from "react-router-dom";
import logo from '../../assets/logos/Group 1329.png'
import { AuthContact } from "../../Provider/AuthProvide";
import { useContext } from "react";


const NavBar = () => {
  const { logOut, user } = useContext(AuthContact)
  const handelLogOut = ()=>{
    logOut()
    .then(()=>{
     localStorage.removeItem('access-volunteer-network')
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  const navItem = <>
    <li><Link to="/">Home</Link></li>
    <li><a>About</a></li>
    <li><Link to="addevent">Add Event</Link></li>


  </>
  return (
    <div className="navbar bg-base-100 mt-5 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <ul className="p-2">
              {navItem}
            </ul>
          </ul>
        </div>
        <Link to='/'>
          <img className="btn btn-ghost normal-case text-xl" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItem}
        </ul>
      </div>
      <div className="ml-28 mr-6">
        {
          user?.email ?
   
          <button onClick={handelLogOut} className="bg-orange-400 text-center rounded p-1">LogOut</button>:
          <Link className=" bg-orange-400 w-20 text-center rounded p-1" to='/login'><button>Login</button></Link> 
          
      }
       <Link className="ml-6 bg-orange-400 w-20 text-center rounded p-1" to='/singup'><button>Sing Up</button></Link>
      </div>
    </div>

  );
};

export default NavBar;