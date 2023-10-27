import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

const RequiredAuth = ({ children }) => {

    // const [loading, error] = useAuthState(auth);
    const { mernAuth } = useContext(AuthContext)
    const [ok, setOk] = useState(false)
    // const [userFromServer, setUserFromServer] = useState()
    // const id = localStorage.getItem("userId")

    // const getSingleUser = async () => {
    //     const res = await axios.get(`http://localhost:5000/api/users/${id}`)
    //         .catch((err) => console.log(err))

    //     const data = await res.data.user
    //     await setUserFromServer(data)
    //     return data
    // }

    // useEffect(() => {
    //     getSingleUser()
    //         .then((data) => setUserFromServer(data))
    // }, [])
    // console.log(userFromServer);
    const location = useLocation()

    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get('http://localhost:5000/api/users/user-auth', {
                headers: {
                    'Authorization': mernAuth?.token
                }
            })
            if (res.data.ok) {
                setOk(true)
            }
            else {
                setOk(false)
            }
        }
        if (mernAuth?.token) authCheck()
    }, [mernAuth?.token])

    // if (loading) {
    //     return <Loading></Loading>
    // }

    // if (!ok) {
    //     return <Navigate to='/login' state={{ from: location }} replace />
    // }
    return ok ? children : <Loading />
};

export default RequiredAuth;