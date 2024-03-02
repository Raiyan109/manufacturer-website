import React, { useContext, useEffect, useState } from 'react';
import fetcher from '../../api';
import { AuthContext } from '../../context/AuthContext';
import ManageProductTable from './ManageProductTable';
import Custom404 from '../../components/Custom404';

const ManageProducts = () => {
    const [parts, setParts] = useState([])
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
    return (
        <div>
            {parts.length > 0 ?
                (<table className="table w-full">
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
                            parts.map((part) => (
                                <ManageProductTable key={part._id} part={part} />
                            ))
                        }
                    </tbody>
                </table>)
                :
                (
                    <Custom404 />
                )
            }
        </div>
    );
};

export default ManageProducts;