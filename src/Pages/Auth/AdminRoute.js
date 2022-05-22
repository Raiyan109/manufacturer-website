import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
// import auth from '../../firebase.init';
import UseAdmin from '../../hooks/UseAdmin';

const AdminRoute = ({ children }) => {

    // const [user, loading, error] = useAuthState(auth);
    const [admin] = UseAdmin()
    const location = useLocation()

    if (!admin) {
        return <Navigate to='/' replace />
    }
    return children

};

export default AdminRoute;