import React, { useEffect, useState } from 'react';
import Part from './Part';
import axios from 'axios'
import fetcher from '../../api';

const Parts = () => {

    const [parts, setParts] = useState([])

    useEffect(() => {
        (async () => {
            const res = await fetcher.get('api/parts')
            // console.log(res);
            setParts(res.data.data)
            console.log(res.data.data);
        })()
    }, [])
    return (
        <div id='parts' className='mt-6'>

            <h1 className='text-5xl text-primary font-bold text-center font-Montserrat'> Our Fragments</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 m-10 space-y-8'>
                {
                    parts && parts?.map(part => <Part
                        key={part._id}
                        part={part}
                    />)
                }
            </div>

            {

            }
        </div>
    );
};

export default Parts;