import React from 'react';
import { useForm } from 'react-hook-form';
import fetcher from '../../api';

const AddReview = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const res = await fetcher.post('api/testimonials', data)
        console.log(res);
        reset()
    }
    return (


        <section class="bg-gray-100">
            <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div class="lg:py-12 lg:col-span-2">
                        <div class="mt-8">
                            <p class="text-4xl font-bold text-pink-600 text-center"> Add A Review here </p>
                        </div>
                    </div>
                    <div class="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
                        <form onSubmit={handleSubmit(onSubmit)} class="space-y-4">
                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            </div>
                            <div>
                                <label class="sr-only" for="message">Message</label>
                                <textarea
                                    {...register("message")}
                                    class="w-full p-3 text-sm border-gray-200 rounded-lg"
                                    placeholder="Add your review here"
                                    rows="8"
                                    id="message"
                                ></textarea>
                            </div>
                            <div className="form-control">
                                <label class='label'>
                                    <span class='label-text'>Rating</span>
                                </label>
                                <input type="text" {...register("rating")} placeholder="Rating" class="input input-bordered input-info w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <button type='submit' class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Add</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddReview;