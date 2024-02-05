import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import fetcher from '../../api';
import axios from "axios";

const AddAProduct = () => {

    const [imageUrl, setImageUrl] = useState('')
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        console.log('clicked from add prodcu');
        const productData = {
            ...data,
            image: imageUrl,

        }
        const res = await fetcher.post('api/parts', productData)
        console.log(res);
        reset()
        setImageUrl('')
    }

    const handleUploadImage = (event) => {
        setLoading(true)
        const image = event.target.files[0];
        const formData = new FormData()
        formData.set('image', image)
        axios.post('https://api.imgbb.com/1/upload?key=4cf62e42525cbf72d4c7ec85ca313c4a', formData)
            .then((res) => {
                setImageUrl(res.data.data.display_url)
                setLoading(false)
            }).catch((error) => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className='my-2  flex justify-center items-center'>
                <form className='w-full max-w-lg bg-white flex flex-col py-5 px-8 rounded-2xl shadow-lg relative' onSubmit={handleSubmit(onSubmit)}>
                    <div className='bg-primary text-xl text-white text-center p-3 rounded-t-2xl absolute top-3 w-full left-0'>
                        Add Product
                    </div>
                    <div className='mt-16 flex flex-col justify-center'>
                        <div className='flex flex-col lg:flex-row items-center gap-2'>
                            <input placeholder='Name' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3 ' {...register("name", { required: true, maxLength: 20 })} />

                            <input placeholder='Price' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3 lg:max-w-[215px]' type="number" {...register("price")} />
                        </div>

                        <textarea placeholder='Description' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3' {...register("description")} />

                        <div className='flex flex-col lg:flex-row items-center gap-2'>
                            <input placeholder='Available Quantity' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3' {...register("availableQuantity")} />

                            <input placeholder='Min. Order Quantity' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3' type="number" {...register("minOrderQuantity")} />
                        </div>
                        <div className="form-control">
                            <label htmlFor="image">Upload Image </label>
                            <input placeholder='Photo URL' id='image' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3' type="file"
                                onChange={handleUploadImage}
                            />
                        </div>

                        <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4'
                            // disabled={!imageUrl ? true : false}
                            type="submit" value='Add new item' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAProduct;