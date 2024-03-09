import React, { useContext, useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import fetcher from '../../api';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { mernAuth, setMernAuth, loading, setLoading } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()


    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true);
        const res = await fetcher.post('api/users/login', {
            email,
            password,
        })

        navigate(location.state || '/')
        const data = await res.data
        console.log(data);
        setMernAuth({
            ...mernAuth,
            user: data.user,
            token: data.access_token
        })
        localStorage.setItem('userId', data.user._id)
        localStorage.setItem('auth', JSON.stringify(res.data))
        setLoading(false);
        return data
    }




    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>

                    <div className="collapse bg-base-200">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            Click to see Admin Credentials
                        </div>
                        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            <p>Email: admin@g.com</p>
                            <p> Password: 123456</p>
                        </div>
                    </div>

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

                        <button className='btn w-full max-w-xs font-OpenSans' type="submit" disabled={loading}>
                            {loading ? 'Logging in...' : 'Log in'}
                        </button>
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