import { motion } from "framer-motion";
import { MdClose, MdEdit } from "react-icons/md";
import { useEffect, useState } from "react";
import EditBackdrop from "./EditBackdrop";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};
const EditModal = ({ handleClose, itemId }) => {
    const [purchase, setPurchase] = useState({
        name: '',
        desc: '',
        available: '',
        order: '',
        price: '',
        category: ''
    });
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [available, setAvailable] = useState('')
    const [order, setOrder] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('ballistic')
    const [file, setFile] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://leviathan-server-1.onrender.com/api/parts/${itemId}`)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [itemId])

    const handleChange = (e) => {
        setFile(e.target.files[0])

        // const filesList = e.target.files
        // const fileNames = []
        // for (let i = 0; i < filesList.length; i++) {
        //     fileNames.push(filesList[i].name)
        // }
        // setShowFiles([...showFiles, ...fileNames])
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('desc', desc);
        formData.append('order', order);
        formData.append('available', available);
        // formData.append('user', mernAuth?.user?._id)
        formData.append('photo', file);
        formData.append('category', category);
        console.log(name);
        try {
            setLoading(true);
            const res = await axios.put(`https://leviathan-server-1.onrender.com/api/parts/update/${itemId}`, formData)
            setLoading(false);
            toast("Profile Updated successfully!");
            // navigate('/dashboard/manage-products')
            handleClose()
            console.log(res);
        } catch (error) {
            console.log(error, 'Error during updating part');
            setLoading(false);
        }

    }

    const partImg = `https://leviathan-server-1.onrender.com/${purchase.photo}`

    return (
        <EditBackdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="bg-white h-[600px] w-[500px] md:w-[700px] lg:w-[900px] rounded-xl -mt-10 flex flex-col gap-5 overflow-auto p-5 z-20 sticky"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <button onClick={handleClose} className="bg-primary text-white place-self-end p-2 mr-2 rounded-full">
                    <MdClose />
                </button>


                <form className='w-full bg-white flex flex-col py-5 px-8 rounded-2xl shadow-lg relative' onSubmit={onSubmit}>
                    <div className='bg-primary text-xl text-white text-center p-3 rounded-t-2xl absolute top-3 w-full left-0'>
                        Update Product
                    </div>
                    <div className='mt-16 flex flex-col justify-center'>
                        <div className="relative group">

                            <img src={partImg} alt="" className=" object-contain py-3 group-hover:opacity-60 w-full h-48" />

                            <span className="absolute bottom-5 left-48 text-primary bg-secondary p-1 rounded-full"><MdEdit /></span>
                        </div>
                        <div className='flex flex-col lg:flex-row items-center gap-2 mb-0 lg:mb-2'>

                            <input placeholder='Name' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 w-full'
                                // {...register("name", { required: true, maxLength: 20 })}
                                defaultValue={purchase.name} onChange={(e) => setName(e.target.value)}
                            />

                            <input placeholder='Price' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-2 lg:mb-0 lg:max-w-[215px] w-full' type="number"
                                // {...register("price")}
                                defaultValue={purchase.price} onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>

                        <textarea placeholder='Description' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-2'
                            // {...register("desc")}
                            defaultValue={purchase.desc} onChange={(e) => setDesc(e.target.value)}
                        />

                        <div className='flex flex-col lg:flex-row items-center gap-2 mb-2'>
                            <input placeholder='Available Quantity' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 w-full'
                                // {...register("availableQuantity")}
                                defaultValue={purchase.available} onChange={(e) => setAvailable(e.target.value)}
                            />

                            <input placeholder='Min. Order Quantity' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-2 lg:mb-0 w-full' type="number"
                                // {...register("minimumOrderQuantity")}
                                defaultValue={purchase.order} onChange={(e) => setOrder(e.target.value)}
                            />
                        </div>
                        <div className="form-control flex flex-row lg:flex-row items-center gap-2 mb-2">
                            <select className="select select-bordered max-w-xs"
                                defaultValue={purchase.category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option disabled selected>Category</option>
                                <option value='submarine-parts'>Submarine Parts</option>
                                <option value='ballistic'>Ballistic</option>
                                <option value='cruise'>Cruise missile</option>
                                <option value='nuclear'>Nuclear</option>
                                <option value='non-nuclear'>Non-nuclear</option>
                                <option value='midget'>Midget</option>
                            </select>
                            <div>
                                {/* <label className=''>Upload Image </label> */}
                                <input placeholder='Photo' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-2 px-3 lg:px-3 w-56'
                                    type="file"
                                    name='photo'
                                    // name='file'
                                    // {...register('file')}
                                    onChange={handleChange}
                                />
                            </div>

                        </div>
                        {file && (
                            <div className='flex flex-col justify-center items-center py-1'>
                                <h3 className='text-center font-semibold'>Preview</h3>
                                <img src={URL.createObjectURL(file)} alt="" className='w-44 h-40 object-contain ' />
                            </div>
                        )}
                        {/* <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4'
                            type="submit" value='Add' /> */}
                        <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4' disabled={loading}>
                            {loading ? 'Updating...' : 'Update'}
                        </button>
                    </div>
                </form>

            </motion.div>
        </EditBackdrop>
    );
};

export default EditModal;