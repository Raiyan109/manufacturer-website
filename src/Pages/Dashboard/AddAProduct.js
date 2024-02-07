import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import fetcher from '../../api';
import axios from "axios";

const AddAProduct = () => {
    const [imageUrl, setImageUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [available, setAvailable] = useState('')
    const [order, setOrder] = useState('')
    const [price, setPrice] = useState('')
    const [file, setFile] = useState(null)
    const [showFiles, setShowFiles] = useState([])

    const { register, handleSubmit, reset } = useForm();

    const handleChange = (e) => {
        setFile(e.target.files[0])
        console.log(e.target.files[0]);
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
        formData.append('desc', desc);
        formData.append('available', available);
        formData.append('order', order);
        formData.append('price', price);
        formData.append('photo', file);

        try {
            setLoading(true);
            const res = await fetcher.post('api/parts/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            console.log(res);
            setLoading(false);
            // Reset form fields
            setName('');
            setDesc('');
            setAvailable('');
            setOrder('');
            setPrice('');
            setFile(null);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    // const onSubmit = async (e) => {
    //     const formData = new FormData();
    //     formData.append('name', data.name);
    //     formData.append('price', data.price);
    //     formData.append('desc', data.desc);
    //     formData.append('availableQuantity', data.availableQuantity);
    //     formData.append('minimumOrderQuantity', data.minimumOrderQuantity);

    //     formData.append('file', data.file[0]); 
    //     console.log(data);
    //     console.log(formData);
    //     try {
    //         const res = await fetcher.post('api/parts', formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         })
    //         console.log(res);
    //         reset()
    //         setImageUrl('')
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


    return (
        <div>
            <div className='my-2  flex justify-center items-center'>
                <form className='w-full max-w-lg bg-white flex flex-col py-5 px-8 rounded-2xl shadow-lg relative' onSubmit={onSubmit}>
                    <div className='bg-primary text-xl text-white text-center p-3 rounded-t-2xl absolute top-3 w-full left-0'>
                        Add Product
                    </div>
                    <div className='mt-16 flex flex-col justify-center'>
                        <div className='flex flex-col lg:flex-row items-center gap-2 mb-0 lg:mb-2'>
                            <input placeholder='Name' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 w-full'
                                // {...register("name", { required: true, maxLength: 20 })}
                                value={name} onChange={(e) => setName(e.target.value)}
                            />

                            <input placeholder='Price' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-2 lg:mb-0 lg:max-w-[215px] w-full' type="number"
                                // {...register("price")}
                                value={price} onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>

                        <textarea placeholder='Description' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-2'
                            // {...register("desc")}
                            value={desc} onChange={(e) => setDesc(e.target.value)}
                        />

                        <div className='flex flex-col lg:flex-row items-center gap-2 mb-2'>
                            <input placeholder='Available Quantity' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 w-full'
                                // {...register("availableQuantity")}
                                value={available} onChange={(e) => setAvailable(e.target.value)}
                            />

                            <input placeholder='Min. Order Quantity' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-2 lg:mb-0 w-full' type="number"
                                // {...register("minimumOrderQuantity")}
                                value={order} onChange={(e) => setOrder(e.target.value)}
                            />
                        </div>
                        <div className="form-control">
                            <label className=''>Upload Image </label>
                            <input placeholder='Photo' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3'
                                type="file"
                                // name='file'
                                // {...register('file')}
                                onChange={handleChange}
                            />
                        </div>
                        {/* <input type="file" {...register('file')} /> */}
                        {/* <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4'
                            type="submit" value='Add' /> */}
                        <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4' disabled={loading}>
                            {loading ? 'Adding...' : 'Add'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAProduct;