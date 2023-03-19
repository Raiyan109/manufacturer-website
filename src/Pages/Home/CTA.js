import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CTA.css'
const CTA = () => {

    const style = {

    }
    return (
        <div>
            <div class='flex items-center justify-center my-20'>
                <div class="bg-slate-800">
                    <div class="bg-slate-700 shadow-md  rounded rounded-xl m-16 border border-indigo-500/50 shadow-xl shadow-indigo-500/50">
                        <div class="flex flex-col p-10  px-16 space-y-6 items-center text-center">
                            <h1 class="font-light md:text-6xl text-5xl text-white tracking-wide ">Purchase the <span id="spin" class="text-transparent font-normal bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 "></span> <br /> you need</h1>
                            <p class="text-gray-400 md:text-2xl text-xl px-18"> Create a job to connect with freelancers and agencies who can increase your sales, make your website stand out, and more</p>
                            {/* <button class="rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white text-lg py-4 px-6">Find Expert</button> */}
                            <Link to='/getQuote'>
                                <button className="inline-flex text-primary btn btn-secondary border-0 py-2 px-6 focus:outline-none hover:bg-pink-200 rounded text-lg font-OpenSans">Get A Quote</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTA;