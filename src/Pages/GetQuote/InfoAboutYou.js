import React from 'react';

const InfoAboutYou = () => {
    return (
        <div>
            <form>
                <div className='grid grid-cols-1 justify-items-center gap-5'>
                    <input
                        type='text'
                        name="user_name"
                        placeholder='Name'

                        className='input w-full max-w-md'
                    />
                    <input
                        type='text'
                        placeholder='Email Address'
                        name="user_email"
                        className='input w-full max-w-md'
                    />
                </div>
            </form>
        </div>
    );
};

export default InfoAboutYou;