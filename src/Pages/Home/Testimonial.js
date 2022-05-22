import React from 'react';
import people1 from '../../assets/images/player-1.png'
import people2 from '../../assets/images/player-2.png'
import people3 from '../../assets/images/player-2.png'
import TestimonialReview from './TestimonialReview';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Harry',
            review: '',
            location: 'California',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Harry',
            review: '',
            location: 'California',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Harry',
            review: '',
            location: 'California',
            img: people3
        },
    ]
    return (
        <div className='my-20'>
            <div className='flex justify-between'>


                {/* <div>
                    
                </div> */}
                {/* <div> */}
                {/* <img src={quote} className="w-24 lg:w-48" alt="" /> */}
                {/* </div> */}
            </div>

            <h1 className='text-5xl text-primary font-bold text-center'> Testimonials</h1>
            <h1 className='text-2xl text-center mt-2'>What our Customers say</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <TestimonialReview
                        key={review._id}
                        review={review}
                    ></TestimonialReview>)
                }
            </div>
        </div>
    );
};

export default Testimonial;