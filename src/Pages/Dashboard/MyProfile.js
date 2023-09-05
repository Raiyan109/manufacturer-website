import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import fetcher from '../../api';
import auth from '../../firebase.init';

const MyProfile = () => {

    const [user, loading, error] = useAuthState(auth);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const res = await fetcher.post('userInfo', data)
        console.log(res);
        reset()
    }

    return (
        <div>
            <section className="bg-gray-100">
                <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="lg:py-12 lg:col-span-2">
                            <div className="mt-8">
                                <h2 className="text-4xl font-bold text-pink-600 text-center"> User's Profile </h2>
                                <p className='text-center text-primary'>Add some additional info</p>
                            </div>
                        </div>

                        <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="space-y-4">
                                <div>
                                    <label className="sr-only" for="name">Name</label>
                                    <input className="w-full p-3 text-sm border-gray-200 rounded-lg"
                                        disabled
                                        value={user?.displayName || ''}
                                        placeholder="Name" type="text" id="name" />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" for="email">Email</label>
                                        <input
                                            className="w-full p-3 text-sm border-gray-200 rounded-lg"
                                            placeholder="Email address"
                                            disabled
                                            value={user?.email || ''}
                                            type="email"
                                            id="email"
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" for="phone">Phone</label>
                                        <input
                                            className="w-full p-3 text-sm border-gray-200 rounded-lg"
                                            placeholder="Phone Number"
                                            type="tel"
                                            id="phone"
                                            {...register("phone")}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" for="education">Education</label>
                                        <input
                                            className="w-full p-3 text-sm border-gray-200 rounded-lg"
                                            placeholder="Education"
                                            type="text"
                                            id="education"
                                            {...register("education")}
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" for="location">location</label>
                                        <input
                                            className="w-full p-3 text-sm border-gray-200 rounded-lg"
                                            placeholder="Location"
                                            type="text"
                                            id="location"
                                            {...register("location")}
                                        />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <button type='submit' className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Confirm</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyProfile;