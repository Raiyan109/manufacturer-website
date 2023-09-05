import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const ResetPass = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)

    };
    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-primary text-2xl font-bold">Forgot Password?</h2>

                        <p className="mb-4 pt-5 text-sm text-gray-700">
                            We get it, stuff happens. Just enter your email address below and we'll send you a
                            link to reset your password!
                        </p>

                        <form onSubmit={handleSubmit(onSubmit)}
                            className='pt-20'
                        >

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email </span>

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

                            <input className='btn w-full max-w-xs font-OpenSans' value='Reset Password' type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPass;