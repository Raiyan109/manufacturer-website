import React, { useContext, useEffect, useState } from 'react';
import fetcher from '../../api';
import { AuthContext } from '../../context/AuthContext';
import ManageProductTable from './ManageProductTable';
import Custom404 from '../../components/Custom404';
import Filter from '../../components/Filter';
import Pagination from '../../components/Pagination';

const ManageProducts = () => {
    const [parts, setParts] = useState([])
    const [searchText, setSearchText] = useState('')
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [sortedList, setSortedList] = useState(null);
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(1000)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(5)
    const { mernAuth, setMernAuth } = useContext(AuthContext)

    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage


    useEffect(() => {
        (async () => {
            try {
                const res = await fetcher.get('api/parts/user/single', {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        "Authorization": `Bearer ${mernAuth?.token}`
                    }
                })
                // console.log(res.data.data.parts);
                setParts(res.data.data.parts)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [mernAuth?.token])

    // Radio filter handler
    const handleCategoryChange = (event) => {
        console.log(event.target.value);
        setSelectedCategory(event.target.value);
    };

    // Range filter handler
    const handlePriceChange = (e) => {
        setMaxPrice(e.target.value)
    }

    // Search filter
    const handleChange = (e) => {
        setSearchText(e.target.value)
        console.log(searchText);
    }



    function filteredData(parts, selected) {
        // let filteredProducts = parts

        //Our search filter function
        const searchFilter = (array) => {
            return array.filter(
                (el) => el.name.toLowerCase().includes(searchText)
            )
        }

        //Applying our search filter function to our array of countries recieved from the API
        let filteredProducts = searchFilter(parts)

        if (selected) {
            filteredProducts = filteredProducts.filter(
                ({ category }) =>
                    category === selected
            )
        }

        const priceFilter = filteredProducts.filter(
            (item) => item.price >= minPrice && item.price <= maxPrice
        )
        // console.log(priceFilter);

        return priceFilter.map(
            (item) => (
                <ManageProductTable key={item._id} part={item} />
            )
        )
    }

    const result = filteredData(parts, selectedCategory)
    const currentResults = result.slice(firstPostIndex, lastPostIndex)
    return (
        <div>
            {parts.length > 0 ?
                (
                    <div className='p-4'>
                        <Filter value={searchText} handleChange={handleChange} handleCategoryChange={handleCategoryChange} minPrice={minPrice} maxPrice={maxPrice} handlePriceChange={handlePriceChange}
                            setSelectedCategory={setSelectedCategory}
                            setSortedList={setSortedList}
                            setMinPrice={setMinPrice}
                            setMaxPrice={setMaxPrice}
                            setSearchText={setSearchText}
                        />
                        <table className="table w-full z-0">
                            {/* head */}
                            <thead>
                                <tr>
                                    {/* <th>
                                        <label>
                                            <input type="checkbox" className="checkbox z-0" />
                                        </label>
                                    </th> */}
                                    <th>Part Name</th>
                                    <th>Price</th>
                                    <th>Category</th>
                                    <th>Created At</th>
                                    <th className='pl-12'>Action</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {
                                    filtered.length > 0 ? filtered.map((part) => (
                                        <ManageProductTable key={part._id} part={part} />
                                    )) : <div className='flex justify-center items-center mx-auto p-10'>
                                        <h1 className='text-center text-xl font-medium'>No Result found by {searchText.slice(0, 4)}</h1>
                                    </div>
                                } */}
                                {
                                    result.length > 0 ? currentResults :
                                        <div className='flex justify-center items-center mx-auto p-10'>
                                            <h1 className='text-center text-xl font-medium'>No Result found by {searchText ? searchText.slice(0, 4) : selectedCategory ? selectedCategory : 'hi'}</h1>
                                        </div>
                                }
                            </tbody>
                        </table>
                        <Pagination totalPosts={result.length} postsPerPage={postPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
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