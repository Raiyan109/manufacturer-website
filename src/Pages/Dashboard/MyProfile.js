import React, { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import fetcher from '../../api';
import auth from '../../firebase.init';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const MyProfile = () => {
    // const [userFromServer, setUserFromServer] = useState()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNum, setPhoneNum] = useState('')
    const [education, setEducation] = useState('')
    const [location, setLocation] = useState('')
    const [user, loading, error] = useAuthState(auth);
    const { userFromServer, mernAuth, setMernAuth } = useContext(AuthContext)
    const id = localStorage.getItem("userId")
    const navigate = useNavigate()

    // const { register, handleSubmit, reset } = useForm();
    // const { updateUser } = useContext(AuthContext)
    // const getSingleUser = async () => {
    //     const res = await axios.get(`http://localhost:5000/api/users/${id}`)
    //         .catch((err) => console.log(err))

    //     const data = await res.data.user
    //     return data
    // }

    // useEffect(() => {
    //     getSingleUser()
    //         .then((data) => setUserFromServer(data))
    // }, [])


    // Get User Data
    useEffect(() => {
        // const { name, email } = mernAuth?.user
        setName(mernAuth?.user?.name)
        setEmail(mernAuth?.user?.email)
        setPhoneNum(mernAuth?.user?.phone)
        setEducation(mernAuth?.user?.education)
        setLocation(mernAuth?.user?.location)
    }, [mernAuth?.user])

    const handleUpdate = async (e) => {
        e.preventDefault()
        const res = await axios.patch(`https://leviathan-server.vercel.app/api/users/update/${id}`, {
            name: name,
            phone: phoneNum,
            education: education,
            location: location
        })
            .catch((err) => console.log(err))

        toast("Profile Updated successfully!");
        const data = await res.data.user
        if (data?.error) {
            toast(data?.error)
        }
        else {
            setMernAuth({
                ...mernAuth,
                user: data?.user
            })
            let ls = localStorage.getItem('auth')
            ls = JSON.parse(ls)
            ls.user = data?.updatedUser
            localStorage.setItem('auth', JSON.stringify(ls))
            toast('Profile Updated Successfully')
        }
        return data

        // try {
        //     const res = await axios.put('http://localhost:5000/api/users/profile', {
        //         name: name,
        //         email: email,
        //         phone: phoneNum,
        //         education: education,
        //         location: location
        //     })
        //     const data = await res.data.existingUser

        //     if (data?.error) {
        //         toast(data?.error)
        //     }
        //     else {
        //         setMernAuth({
        //             ...mernAuth,
        //             user: data?.updatedUser
        //         })
        //         let ls = localStorage.getItem('auth')
        //         ls = JSON.parse(ls)
        //         ls.user = data?.updatedUser
        //         localStorage.setItem('auth', JSON.stringify(ls))
        //         toast('Profile Updated Successfully')
        //     }

        //     return data

        // } catch (error) {
        //     console.log(error);
        //     toast('Something went wrong')
        // }
    }



    const onSubmit = async (data) => {
        // const res = await fetcher.post('userInfo', data)
        // console.log(res);
        // const userOtherInfo = {
        //     education: data.education,
        //     location: data.location
        // }
        // updateUser(userOtherInfo)
        //     .then(() => {
        //         console.log(userOtherInfo);
        //         console.log(user);
        //         toast("Successfully Signed up!");
        //     })
        //     .catch(err => console.log(err))

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
                                // onSubmit={handleSubmit(onSubmit)}
                                onSubmit={handleUpdate}
                                className="space-y-4">
                                <div>
                                    <label className="sr-only" htmlFor="name">Name</label>
                                    <input className="w-full p-3 text-sm border-gray-200 rounded-lg"
                                        // disabled
                                        // value={user?.displayName || ''}
                                        // placeholder="Name" type="text" id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Name" type="text" id="name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" htmlFor="email">Email</label>
                                        <input
                                            className="w-full p-3 text-sm border-gray-200 rounded-lg"
                                            placeholder="Email address"
                                            disabled
                                            // value={user?.email || ''}
                                            // type="email"
                                            // id="email"
                                            value={email}
                                            type="email"
                                            id="email"
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" htmlFor="phone">Phone</label>
                                        <input
                                            className="w-full p-3 text-sm border-gray-200 rounded-lg"
                                            placeholder="Phone Number"
                                            type="tel"
                                            id="phone"
                                            // {...register("phone")}
                                            value={phoneNum}
                                            onChange={(e) => setPhoneNum(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" htmlFor="education">Education</label>
                                        <input
                                            className="w-full p-3 text-sm border-gray-200 rounded-lg"
                                            placeholder="Education"
                                            type="text"
                                            id="education"
                                            // {...register("education")}
                                            value={education}
                                            onChange={(e) => setEducation(e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" htmlFor="location">location</label>
                                        <input
                                            className="w-full p-3 text-sm border-gray-200 rounded-lg"
                                            placeholder="Location"
                                            type="text"
                                            id="location"
                                            // {...register("location")}
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <button type='submit' className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </div>
    );
};

export default MyProfile;