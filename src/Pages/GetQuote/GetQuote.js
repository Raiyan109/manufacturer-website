import React, { useState } from 'react';
import InfoAboutYou from './InfoAboutYou';
import QuoteOverview from './QuoteOverview';
import Summary from './Summary';
import UploadFiles from './UploadFiles';

const GetQuote = () => {
    const [page, setPage] = useState(1)

    const formTitles = ['Quote Overview', 'Info About You', 'Upload Files', 'Summary']

    const Pages = () => {
        if (page === 0) {
            return <QuoteOverview />
        }
        else if (page === 1) {
            return <UploadFiles />
        }
        else if (page === 2) {
            return <InfoAboutYou />
        }
        else {
            return <Summary />
        }
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content text-center shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] w-1/2 h-auto flex flex-col">
                    {/* Progress Bar */}
                    <div>




                        <progress className="progress progress-primary w-56" value={page === 0 ? '20' : page === 1 ? '40' : page === 2 ? '70' : '100'} max="100"></progress>
                        {/* <ul className="steps">
                            <li className="step step-primary">Register</li>
                            <li className="step step-primary">Choose plan</li>
                            <li className="step">Purchase</li>
                            <li className="step">Receive Product</li>
                        </ul> */}
                    </div>
                    <div className='h-80'>
                        {/* Head */}
                        <div className='mt-6'>
                            <h1>{formTitles[page]}</h1>
                        </div>
                        {/* Body of Step */}
                        <div className='mt-6'>
                            {Pages()}
                        </div>
                        {/* Buttons of step */}
                        <div className='mt-6'>
                            <div className='flex justify-center items-end '>
                                <button
                                    disabled={page === 0}
                                    onClick={() => { setPage((prevPage) => prevPage - 1) }}
                                    type='submit'
                                    value="Send"
                                    className="btn btn-secondary ml-9"
                                >Back</button>
                                <button
                                    disabled={page === formTitles.length - 1}
                                    onClick={() => { setPage((prevPage) => prevPage + 1) }}
                                    type='submit'
                                    value="Send"
                                    className="btn btn-secondary ml-9">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetQuote;