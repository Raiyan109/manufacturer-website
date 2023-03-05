import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const url = 'http://localhost:5000/api/reviews'
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='mt-14'>
            <h1 className='text-center text-6xl mb-14'>Clients Reviews</h1>
            <div className='flex justify-center items-center'></div>
            <div className='grid gap-x-8 gap-y-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;