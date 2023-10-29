import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logos/Group 1329.png'
import './Login.css'
import { useContext } from 'react';
import { AuthContact } from '../../Provider/AuthProvide';


const Login = () => {
    const navigate = useNavigate();
    const { loginUser } = useContext(AuthContact)

    const handelLogin = (event) => {
        navigate('/')
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then((result) => {
                const user = result.user;
                const loggedUser = { email: user.email }
                console.log(loggedUser);
                fetch('http://localhost:5000/jwt',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(loggedUser)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    localStorage.setItem('access-volunteer-network',data.token)
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <>
            <div className='mb-16 mt-7'>
                <Link to="/"> <img className='loginimg' src={logo} alt="" /></Link>
            </div>

            {/* login section */}

            <div className="card w-1/2 h-[350px] mt-6 mx-auto bg-base-100 shadow-xl">
                <h2 className="text-2xl text-center">Login</h2>

                <form onSubmit={handelLogin}>
                    <div>
                        <p className='login-title'>Login</p>
                        <input type="email" placeholder="email" name='email' className="login" required />
                    </div>
                    <div>
                        <p className='login-title'>Password</p>
                        <input type="password" name='password' placeholder="password" className="login" required />
                    </div>
                    <div>
                        <input className='btn btn-primary mt-4 login-submit ' type="submit" name='submit' value="login" />
                    </div>
                </form>
                <p className='ml-28 mt-4'>New to volunteer network <Link className='text-primary' to="/singup">Sing Up</Link> </p>
            </div>
        </>


    );
};

export default Login;