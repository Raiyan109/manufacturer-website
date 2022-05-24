import React, { useEffect, useState } from 'react';
import Part from './Part';
import axios from 'axios'
import fetcher from '../../api';

const Parts = () => {

    const [parts, setParts] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:5000/part')
    //         .then(res => res.json())
    //         .then(data => setParts(data))
    // }, [])

    useEffect(() => {
        // axios.get('http://localhost:5000/part').then((res) => setParts(res))

        (async () => {
            const res = await fetcher.get('/part')
            setParts(res.data)
        })()
    }, [])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 m-10'>
            {
                parts?.map(part => <Part
                    key={part._id}
                    part={part}
                />)
            }
        </div>
    );
};

export default Parts;