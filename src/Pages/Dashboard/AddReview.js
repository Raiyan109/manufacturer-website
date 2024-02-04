import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import fetcher from '../../api';
import Breadcrumb from '../../components/Breadcrumb';

const AddReview = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const res = await fetcher.post('api/testimonials', data)
        console.log(res);
        reset()
    }
    return (


        <section className="bg-gray-100">
            <div className='p-5'>
                <Breadcrumb />
            </div>
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:py-12 lg:col-span-2">
                        <div className="mt-8">
                            <p className="text-4xl font-bold text-pink-600 text-center"> Add A Review here </p>
                        </div>
                    </div>
                    <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            </div>
                            <div>
                                <label className='label'>
                                    <span className='label-text'>Name</span>
                                </label>
                                <input type="text" {...register("name")} placeholder="Your Name" className="input input-bordered input-info w-full max-w-xs" />
                            </div>
                            <div>
                                <label className="sr-only" htmlFor="message">Review</label>
                                <textarea
                                    {...register("review")}
                                    className="w-full p-3 text-sm border-gray-200 rounded-lg"
                                    placeholder="Add your review here"
                                    rows="8"
                                    id="review"
                                ></textarea>
                            </div>
                            <div className="form-control">
                                <label className='label'>
                                    <span className='label-text'>Rating</span>
                                </label>
                                <input type="text" {...register("rating")} placeholder="Rating" className="input input-bordered input-info w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <button
                                    onClick={() => toast("Review added")}
                                    type='submit' className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Add</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddReview;