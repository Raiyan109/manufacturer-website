import { FaFilter } from "react-icons/fa";

const ProductsFilter = ({ value, handleChange, handleCategoryChange, minPrice, maxPrice, handlePriceChange, setSelectedCategory, setMinPrice, setMaxPrice, setSearchText }) => {
    const handleResetFilters = () => {
        // Reset all filter states to their initial values
        setSelectedCategory(null);
        setMinPrice(0);
        setMaxPrice(1000);
        setSearchText('');
    };
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <h1 className="text-xl font-semibold">All Parts</h1>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text"
                        value={value}
                        onChange={handleChange}
                        placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div>
                    <button className="btn btn-primary" onClick={handleResetFilters}>Reset Filters</button>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className=" rounded-full">
                            <FaFilter size={25} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <select className="select select-bordered max-w-xs"
                                // value={category}
                                onChange={handleCategoryChange}
                            >
                                <option disabled selected>Filter by category</option>
                                <option value='submarine-parts'>Submarine Parts</option>
                                <option value='ballistic'>Ballistic</option>
                                <option value='cruise'>Cruise missile</option>
                                <option value='nuclear'>Nuclear</option>
                                <option value='non-nuclear'>Non-nuclear</option>
                                <option value='midget'>Midget</option>
                            </select>
                        </li>
                        {/* <li> */}
                        {/* Filter by price */}
                        <div>
                            <h1 className='p-2 text-xs text-primary'>Filter By Price : ${minPrice} - ${maxPrice}</h1>
                            <input type="range"
                                onChange={handlePriceChange}
                                min='0'
                                max='1000'
                                value={maxPrice}
                                className="range range-primary" />
                        </div>
                        {/* </li> */}
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductsFilter;