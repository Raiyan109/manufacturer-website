import React, { useContext, useEffect, useState } from 'react';
import fetcher from '../../../api';
import { AuthContext } from '../../../context/AuthContext';
import Loading from '../../Shared/Loading';
import AllProduct from './AllProduct';
import ProductsFilter from '../../../components/ProductsFilter';
import Pagination from '../../../components/Pagination';

const AllProducts = () => {

    // const { loading } = useContext(AuthContext)
    const [parts, setParts] = useState([])
    const [searchText, setSearchText] = useState('')
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [sortedList, setSortedList] = useState(null);
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(1000)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(6)

    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage

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
                <AllProduct key={item._id} part={item} />
            )
        )
    }

    const result = filteredData(parts, selectedCategory)
    const currentResults = result.slice(firstPostIndex, lastPostIndex)

    useEffect(() => {
        (async () => {
            const res = await fetcher.get('api/parts')
            // console.log(res.data.data);
            setParts(res.data.data)
        })()
    }, [])

    // if (loading) {
    //     return <Loading></Loading>
    // }
    return (
        <div className='container mx-auto  px-5 py-16 '>
            {/* Title */}
            <div className="pt-5 bg-white">
                <h1 className="text-center text-5xl font-bold font-Montserrat text-primary">All Products</h1>
            </div>

            {/* Products */}
            <section className='py-10'>
                {/* Filters */}
                <ProductsFilter value={searchText} handleChange={handleChange} handleCategoryChange={handleCategoryChange} minPrice={minPrice} maxPrice={maxPrice} handlePriceChange={handlePriceChange}
                    setSelectedCategory={setSelectedCategory}
                    setSortedList={setSortedList}
                    setMinPrice={setMinPrice}
                    setMaxPrice={setMaxPrice}
                    setSearchText={setSearchText}
                />
                <div className='mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6  md:grid-cols-2 lg:grid-cols-3'>
                    {
                        result.length > 0 ? currentResults :
                            <div className='flex justify-center items-center mx-auto p-10'>
                                <h1 className='text-center text-xl font-medium'>No Result found by {searchText ? searchText.slice(0, 4) : selectedCategory ? selectedCategory : 'hi'}</h1>
                            </div>
                    }
                </div>
                <Pagination totalPosts={result.length} postsPerPage={postPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </section>
        </div>
    );
};

export default AllProducts;