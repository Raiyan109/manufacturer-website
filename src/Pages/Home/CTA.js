import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CTA.css'
const CTA = () => {

    const style = {

    }
    return (
        <div>
            <div className='flex items-center justify-center my-20'>
                <div className="bg-slate-800 w-full">
                    <div className="bg-slate-700 shadow-md rounded-xl m-16 border border-indigo-500/50 shadow-indigo-500/50">
                        <div className="flex flex-col p-10  px-16 space-y-6 items-center text-center">
                            <h1 className="font-light md:text-6xl text-3xl text-white tracking-wide ">Purchase the <span id="spin" className="text-transparent font-normal bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 "></span> <br /> you need</h1>
                            <p className="text-gray-400 md:text-2xl hidden md:block px-18"> Create a job to connect with freelancers and agencies who can increase your sales, make your website stand out, and more</p>
                            {/* <button className="rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white text-lg py-4 px-6">Find Expert</button> */}
                            <Link to='/getQuote'>
                                <button className="inline-flex text-primary btn btn-secondary border-0 py-1 md:py-2 px-4 md:px-6 focus:outline-none hover:bg-pink-200 rounded text-xs md:text-lg font-OpenSans">Get A Quote</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTA;