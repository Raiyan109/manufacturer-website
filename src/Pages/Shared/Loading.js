import React from 'react';
import { Triangle } from 'react-loader-spinner';
const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Triangle
                height="80"
                width="80"
                color="#5f4d5d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    );
};

export default Loading;