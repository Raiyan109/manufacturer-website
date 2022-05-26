import React, { useEffect, useState } from 'react';
import fetcher from '../../api';
import people1 from '../../assets/images/player-1.png'
import people2 from '../../assets/images/player-2.png'
import people3 from '../../assets/images/player-2.png'
import TestimonialReview from './TestimonialReview';

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        (async () => {
            const res = await fetcher.get('/testimonial')
            setTestimonials(res.data)
        })()
    }, [])
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
                    testimonials.map(review => <TestimonialReview
                        key={review._id}
                        review={review}
                    ></TestimonialReview>)
                }
            </div>
        </div>
    );
};

export default Testimonial;