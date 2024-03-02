import React, { useContext, useEffect, useState } from 'react';
import fetcher from '../../api';
import { AuthContext } from '../../context/AuthContext';
import ManageProductTable from './ManageProductTable';
import Custom404 from '../../components/Custom404';

const ManageProducts = () => {
    const [parts, setParts] = useState([])
    const [searchText, setSearchText] = useState('')
    const { mernAuth, setMernAuth } = useContext(AuthContext)

    useEffect(() => {
        (async () => {
            try {
                const res = await fetcher.get('api/parts/user/single', {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        "Authorization": `Bearer ${mernAuth?.token}`
                    }
                })
                console.log(res.data.data.parts);
                setParts(res.data.data.parts)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [mernAuth?.token])

    const handleChange = (e) => {
        setSearchText(e.target.value)
        console.log(searchText);
    }

    //Our search filter function
    const searchFilter = (array) => {
        return array.filter(
            (el) => el.name.toLowerCase().includes(searchText)
        )
    }

    //Applying our search filter function to our array of countries recieved from the API
    const filtered = searchFilter(parts)
    return (
        <div>
            {parts.length > 0 ?
                (
                    <div>
                        <div className='max-w-3xl'>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text"
                                    value={searchText}
                                    onChange={handleChange}
                                    className="grow" placeholder="Search" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            </label>
                        </div>

                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th className='pl-12'>Action</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filtered.length > 0 ? filtered.map((part) => (
                                        <ManageProductTable key={part._id} part={part} />
                                    )) : <div className='flex justify-center items-center mx-auto p-10'>
                                        <h1 className='text-center text-xl font-medium'>No Result found by {searchText.slice(0, 4)}</h1>
                                    </div>
                                }
                            </tbody>
                        </table>
                    </div>)
                :
                (
                    <Custom404 />
                )
            }
        </div>
    );
};

export default ManageProducts;