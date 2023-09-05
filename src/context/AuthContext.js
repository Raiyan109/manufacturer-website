import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createContext, useEffect, useReducer, useState } from "react";

import auth from "../firebase.init";


export const AuthContext = createContext()



// export const authReducer = (state, action) => {
//     switch (action.type) {
//         case 'LOGIN':
//             return { user: action.payload }
//         case 'LOGOUT':
//             return { user: null }
//         default:
//             return state
//     }
// }

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

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
            console.log(auth);
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe()
    }, [])


    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    // const [state, dispatch] = useReducer(authReducer, {
    //     user: null
    // })
    // console.log('AuthContext state: ', state);

    const authInfo = {
        createUser,
        signIn,
        user,
        loading,
        updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}