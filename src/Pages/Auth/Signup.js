import React, { useContext, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const { createUser, updateUser } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')

    // const [
    //     createUserWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    // ] = useCreateUserWithEmailAndPassword(auth);

    // const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // const [token] = useToken(user || gUser)

    const navigate = useNavigate()

    let signInError

    // if (token) {
    //     navigate('/part')
    // }

    // if (loading || gLoading || updating) {
    //     return <Loading></Loading>
    // }

    // if (error || gError || updateError) {
    //     signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    // }

    const onSubmit = async data => {
        console.log(data);
        setSignUpError('')
        createUser(data.email, data.password)
            .then(res => {
                const user = res.user
                console.log(user);
                toast("Successfully Signed up!");
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        navigate('/')
                    })
                    .catch(err => console.log(err))
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            })
        // await createUserWithEmailAndPassword(data.email, data.password)
        // await updateProfile({ displayName: data.name });
        // console.log('update done');


    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold font-Montserrat">Sign up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-Montserrat">Name</span>

                            </label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.name.message}</span>}

                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-Montserrat">Email </span>

                            </label>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 ">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-Montserrat">Password</span>

                            </label>
                            <input
                                type="password"
                                placeholder="Your password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 charachters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500 ">{errors.password.message}</span>}
                            </label>
                        </div>
                        {/* {signInError} */}
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                        <input className='btn w-full max-w-xs font-OpenSans' value='Sign up' type="submit" />
                    </form>

                    <p className='font-Montserrat'><small>Already have an Account? <Link className='text-secondary font-semibold font-Montserrat' to='/login'>PLease Login</Link></small></p>
                    <div className="divider font-Montserrat">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline font-OpenSans"
                    >Continue with google</button>


                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Signup;