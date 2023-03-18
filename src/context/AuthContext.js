import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useReducer } from "react";

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
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // const [state, dispatch] = useReducer(authReducer, {
    //     user: null
    // })
    // console.log('AuthContext state: ', state);

    const authInfo = {
        createUser,
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}