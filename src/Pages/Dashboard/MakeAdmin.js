import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import MakeAdminRow from './MakeAdminRow';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const MakeAdmin = () => {
    const [allUser, setAllUser] = useState([])
    const [role, setRole] = useState(0)
    // const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://stormy-sea-79672.herokuapp.com/user', {
    //     method: 'GET',
    //     headers: {
    //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    // }).then(res => res.json()))

    const id = localStorage.getItem("userId")

    const makeAdmin = async (e) => {
        e.preventDefault()
        const res = await axios.put(`https://leviathan-server-1.onrender.com/api/users/update/${id}`, {
            role
        })
            .catch((err) => console.log(err))
        toast("Admin made successfully!");
        const data = await res.data.user
        // console.log(data);
        return data
    }

    const getUsers = async () => {
        const res = await axios.get('https://leviathan-server-1.onrender.com/api/users')
            .catch((err) => console.log(err))

        const data = await res.data.users
        return data
    }

    useEffect(() => {
        getUsers()
            .then((data) => setAllUser(data))
    }, [])

    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <h1 className='text-2xl my-4 p-5'>Total Users: {allUser.length}</h1>

            <div className="overflow-x-auto p-5">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>User name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUser.map((user, index) => <MakeAdminRow
                                key={user._id}
                                user={user}
                                index={index}
                                setRole={setRole}
                            // refetch={refetch}
                            ></MakeAdminRow>)
                        }
                    </tbody>
                </table>
            </div>
            <ToastContainer />
        </div>
    );
};

export default MakeAdmin;