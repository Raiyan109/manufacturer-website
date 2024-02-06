import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import fetcher from '../../api';
import axios from "axios";

const AddAProduct = () => {
    const [file, setFile] = useState([])
    const [showFiles, setShowFiles] = useState([])
    const [imageUrl, setImageUrl] = useState('')
    const [loading, setLoading] = useState(false)
    // const [name, setName] = useState('')
    // const [desc, setDesc] = useState('')
    // const [availableQuantity, setAvailableQuantity] = useState('')
    // const [minimumOrderQuantity, setMinimumOrderQuantity] = useState('')
    // const [price, setPrice] = useState('')

    const { register, handleSubmit, reset } = useForm();

    // const handleChange = (e) => {
    //     setFile(e.target.files)
    //     console.log(e.target.files);
    //     const filesList = e.target.files
    //     const fileNames = []
    //     for (let i = 0; i < filesList.length; i++) {
    //         fileNames.push(filesList[i].name)
    //     }
    //     setShowFiles([...showFiles, ...fileNames])
    // }

    const onSubmit = async (data) => {
        const formData = new FormData();
        // Append other form data
        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('desc', data.desc);
        formData.append('availableQuantity', data.availableQuantity);
        formData.append('minimumOrderQuantity', data.minimumOrderQuantity);

        // Append file data
        formData.append('file', data.file[0]); // Assuming single file upload
        console.log(data);
        console.log(formData);
        try {
            // const res = await fetcher.post('api/parts', formData, {
            //     headers: {
            //         'Content-Type': 'multipart/form-data'
            //     }
            // })
            // console.log(res);
            reset()
            setImageUrl('')
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <div className='my-2  flex justify-center items-center'>
                <form className='w-full max-w-lg bg-white flex flex-col py-5 px-8 rounded-2xl shadow-lg relative' onSubmit={handleSubmit(onSubmit)}>
                    <div className='bg-primary text-xl text-white text-center p-3 rounded-t-2xl absolute top-3 w-full left-0'>
                        Add Product
                    </div>
                    <div className='mt-16 flex flex-col justify-center'>
                        <div className='flex flex-col lg:flex-row items-center gap-2 mb-0 lg:mb-2'>
                            <input placeholder='Name' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 w-full'
                                {...register("name", { required: true, maxLength: 20 })}
                            />

                            <input placeholder='Price' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-2 lg:mb-0 lg:max-w-[215px] w-full' type="number"
                                {...register("price")}
                            />
                        </div>

                        <textarea placeholder='Description' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-2'
                            {...register("desc")}
                        />

                        <div className='flex flex-col lg:flex-row items-center gap-2 mb-2'>
                            <input placeholder='Available Quantity' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 w-full'
                                {...register("availableQuantity")}
                            />

                            <input placeholder='Min. Order Quantity' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-2 lg:mb-0 w-full' type="number"
                                {...register("minimumOrderQuantity")}
                            />
                        </div>
                        <div className="form-control">
                            <label className=''>Upload Image </label>
                            <input placeholder='Photo' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3'
                                type="file"
                                // name='file'
                                {...register('file')}
                            // onChange={handleChange}
                            />
                        </div>
                        <input type="file" {...register('file')} />
                        <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4'
                            // disabled={!imageUrl ? true : false}
                            type="submit" value='Add' />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAProduct;