import React from 'react';
import { RxAvatar } from "react-icons/rx";

const TestimonialReview = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">

                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            {review.img ?
                                <img src={review.img} alt={review.name}
                                />
                                :
                                <RxAvatar className='w-16 h-16' />
                            }
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl'>{review.name}</h1>
                        <p className='text-sm'>{review.review}</p>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default TestimonialReview;