import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {

    const [parts, setParts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/part')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3'>
            {
                parts.map(part => <Part
                    key={part._id}
                    part={part}
                />)
            }
        </div>
    );
};

export default Parts;