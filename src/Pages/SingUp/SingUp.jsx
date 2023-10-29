import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logos/Group 1329.png'
import './SingUp.css'
import { AuthContact } from '../../Provider/AuthProvide';
import { useContext } from 'react';


const SingUp = () => {
  const navigate = useNavigate()

const {createUser}= useContext(AuthContact)
  const handelSingIn =(event)=>{
    navigate('/')
    event.preventDefault();

    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;

   createUser(email,password,name)
   .then((result)=>{
    const user= result.user;
    console.log(user);
   })
   .catch((error)=>{
    console.log(error);
   })
  }

    return (
      <div>
<Link to="/">
<img className='mt-5 w-1/5 m-auto mb-7' src={logo} alt="" />
</Link>
<div className="card w-1/2 h-[430px] bg-base-100 shadow-xl mx-auto mt-20 ">
 <h3 className="text-center text-3xl mb-8">Register</h3>
  
   <form onSubmit={handelSingIn}>
     <div className='register-side'>
        <p className='mb-2'>Name</p>
       <input className='email mb-3' type="text" name="name" placeholder='name' required />
     </div>
     <div className='register-side'>
        <p className='mb-2'>Email</p>
       <input className='email mb-3' type="email" name="email" placeholder='email' required />
     </div>
     <div className='register-side'>
      <p className='mb-2'>Password</p>
      <input className='email mb-5' type="password" name="password" placeholder='password' required />
     </div>
     <div>
      <input className='btn btn-primary singup mb-3 ' type="submit" name='submit' value="SingUp" />
     </div>
   </form>
  <p className='ml-28'>Alreday have an account <Link className='text-primary' to="/login">Login</Link> </p>
    </div>
  </div>
    );
};

export default SingUp;