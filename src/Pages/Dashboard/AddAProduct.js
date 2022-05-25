import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import fetcher from '../../api';
import axios from "axios";

const AddAProduct = () => {

    const [imageUrl, setImageUrl] = useState('')
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {

        const productData = {
            ...data,
            image: imageUrl,

        }
        const res = await fetcher.post('part', productData)
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
            <div className='h-screen my-2  flex justify-center items-center'>
                <form className='w-full max-w-xs bg-white flex flex-col py-5 px-8 rounded-lg shadow-lg' onSubmit={handleSubmit(onSubmit)}>

                    <input placeholder='Name' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3' {...register("name", { required: true, maxLength: 20 })} />
                    <textarea placeholder='Description' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3' {...register("description")} />

                    <input placeholder='Available Quantity' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3' {...register("availableQuantity")} />

                    <input placeholder='Price' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3' type="number" {...register("price")} />

                    <input placeholder='Min. Order Quantity' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3' type="number" {...register("minOrderQuantity")} />

                    <div className="form-control">
                        <label htmlFor="image">Upload Image </label>
                        <input placeholder='Photo URL' id='image' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3' type="file"
                            onChange={handleUploadImage}
                        />
                    </div>

                    <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4'
                        disabled={!imageUrl ? true : false}
                        type="submit" value='Add new item' />
                </form>
            </div>
        </div>
    );
};

export default AddAProduct;