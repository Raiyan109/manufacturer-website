import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";
import axios from "axios";


export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const [mernAuth, setMernAuth] = useState({
        user: null,
        token: ''
    })

    useEffect(() => {
        const data = localStorage.getItem('auth')
        if (data) {
            const parsedData = JSON.parse(data)
            setMernAuth({
                ...mernAuth,
                user: parsedData.user,
                token: parsedData.access_token
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(mernAuth);
    // const [userFromServer, setUserFromServer] = useState()
    // const id = localStorage.getItem("userId")

    // const getSingleUser = async () => {
    //     const res = await axios.get(`http://localhost:5000/api/users/${id}`)
    //         .catch((err) => console.log(err))

    //     const data = await res.data.user
    //     setUserFromServer({
    //         ...userFromServer,
    //         data
    //     })
    //     return data
    // }

    // useEffect(() => {
    //     getSingleUser()
    // }, [])



    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(auth);
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe()
    }, [])


    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }


    const authInfo = {
        createUser,
        signIn,
        user,
        loading,
        updateUser,
        // userFromServer,
        mernAuth, setMernAuth
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}