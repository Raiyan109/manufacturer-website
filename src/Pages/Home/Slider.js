import React from 'react';
import './slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import img1 from '../../assets/images/sub-facility-1.jpg'
import img2 from '../../assets/images/sub-facility-1.jpg'
import img3 from '../../assets/images/sub-facility-5.jpg'
import img4 from '../../assets/images/CAMPER.jpg'

const Slider = () => {
    return (
        <div className='my-20'>


            <h1 className='text-5xl text-primary font-bold text-center'> Our Facilities</h1>
            <h1 className='text-2xl text-center mt-2'>Worldwide Facilities</h1>
            <div className='flex justify-center items-center p-10'>

                <Swiper
                    scrollbar={{
                        hide: true,
                    }}
                    modules={[Scrollbar]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={img1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="" />
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Slider;