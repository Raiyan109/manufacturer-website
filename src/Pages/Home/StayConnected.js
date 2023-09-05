import React, { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
const StayConnected = () => {
    // const [formState, setFormState] = useState({})

    // const changeHandler = e => {
    //     setFormState({ ...formState, [e.target.name]: e.target.value })
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    // }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t3rlyd6', 'template_k8rrwcu', form.current, 'W_0i0So-npwUb6b5D')
            .then((result) => {
                console.log(result.text);
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='bg-primary px-10 py-14 '>
            <div className='text-center pb-14 text-white'>
                <p className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary'>
                    Contact Us
                </p>
                <h1 className='text-4xl'>Stay connected with us</h1>
            </div>
            <form ref={form} onSubmit={sendEmail}>
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
                    <textarea
                        className='textarea w-full max-w-md'
                        placeholder='Your message'
                        name="message"
                        rows={6}
                    ></textarea>
                    <button type='submit' value="Send" className="btn btn-secondary font-OpenSans">Send</button>
                </div>
            </form>
        </div>
    );
};

export default StayConnected;