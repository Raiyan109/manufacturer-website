import React, { useContext, useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { mernAuth, setMernAuth, loading } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()


    const handleLogin = async (e) => {
        e.preventDefault()
        const res = await axios.post('https://leviathan-server.vercel.app/api/users/login', {
            email,
            password,
        })
        navigate(location.state || '/')
        const data = await res.data.user
        setMernAuth({
            ...mernAuth,
            user: res.data.user,
            token: res.data.token
        })
        localStorage.setItem('userId', data._id)
        localStorage.setItem('auth', JSON.stringify(res.data))
        return data
    }




    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>

                    <form
                        onSubmit={handleLogin}
                        className='space-y-5'
                    >

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email </span>

                            </label>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="input input-bordered w-full max-w-xs"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input
                                type="password"
                                placeholder="Your password"
                                className="input input-bordered w-full max-w-xs"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                        </div>

                        <input className='btn w-full max-w-xs font-OpenSans' value='login' type="submit" />
                    </form>

                    <p><small>New to Leviathan? <Link className='text-secondary font-semibold' to='/signup'>Create New Account</Link></small></p>
                    {/* <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue with google</button> */}

                    <div className="mt-3">
                        <Link to="/resetPass" className="hover:text-secondary transition-all">Forgot password?</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;