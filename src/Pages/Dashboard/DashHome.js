import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const DashHome = () => {
    const { mernAuth, setMernAuth } = useContext(AuthContext)
    return (
        <div>
            <h1 className='text-4xl text-blue-700 font-medium text-center'>Welcome <span className='font-bold'>{mernAuth?.user?.name}</span> !</h1>
        </div>
    );
};

export default DashHome;