import React, { useState } from 'react';
import InfoAboutYou from './InfoAboutYou';
import QuoteOverview from './QuoteOverview';
import Summary from './Summary';
import UploadFiles from './UploadFiles';
import img from '../../assets/images/navy-submarine.jpg'

const GetQuote = () => {
    const [page, setPage] = useState(1)

    const formTitles = ['Quote Overview', 'Upload Files', 'Info About You', 'Summary']

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
            <div className="bg-white relative lg:py-20">
                <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row">
                    <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
                        <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
                            <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                                <img src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png" alt='multi-step-background' className="btn-" />
                            </div>
                        </div>
                        <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
                            <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
            relative z-10">
                                <div className='flex justify-center items-center mx-auto mb-10'>
                                    <progress className="progress progress-primary w-56" value={page === 0 ? '20' : page === 1 ? '40' : page === 2 ? '70' : '100'} max="100"></progress>
                                    {/* <ul className="steps">
                            <li className="step step-primary">Register</li>
                            <li className="step step-primary">Choose plan</li>
                            <li className="step">Purchase</li>
                            <li className="step">Receive Product</li>
                        </ul> */}
                                </div>
                                <p className="w-full text-4xl font-medium text-center leading-snug font-serif">{formTitles[page]}</p>
                                <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">

                                    <div className='h-80'>
                                        {/* Head */}
                                        {/* <div className='mt-6'>
                                            <h1 className='w-full text-4xl font-medium text-center leading-snug font-serif'></h1>
                                        </div> */}
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
                            <svg viewbox="0 0 91 91" className="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-yellow-300
            fill-current"><g stroke="none" strokewidth="1" fillrule="evenodd"><g fillrule="nonzero"><g><g><circle
                                    cx="3.261" cy="3.445" r="2.72" /><circle cx="15.296" cy="3.445" r="2.719" /><circle cx="27.333" cy="3.445"
                                        r="2.72" /><circle cx="39.369" cy="3.445" r="2.72" /><circle cx="51.405" cy="3.445" r="2.72" /><circle cx="63.441"
                                            cy="3.445" r="2.72" /><circle cx="75.479" cy="3.445" r="2.72" /><circle cx="87.514" cy="3.445" r="2.719" /></g><g
                                                transform="translate(0 12)"><circle cx="3.261" cy="3.525" r="2.72" /><circle cx="15.296" cy="3.525"
                                                    r="2.719" /><circle cx="27.333" cy="3.525" r="2.72" /><circle cx="39.369" cy="3.525" r="2.72" /><circle
                                            cx="51.405" cy="3.525" r="2.72" /><circle cx="63.441" cy="3.525" r="2.72" /><circle cx="75.479" cy="3.525"
                                                r="2.72" /><circle cx="87.514" cy="3.525" r="2.719" /></g><g transform="translate(0 24)"><circle cx="3.261"
                                                    cy="3.605" r="2.72" /><circle cx="15.296" cy="3.605" r="2.719" /><circle cx="27.333" cy="3.605" r="2.72" /><circle
                                            cx="39.369" cy="3.605" r="2.72" /><circle cx="51.405" cy="3.605" r="2.72" /><circle cx="63.441" cy="3.605"
                                                r="2.72" /><circle cx="75.479" cy="3.605" r="2.72" /><circle cx="87.514" cy="3.605" r="2.719" /></g><g
                                                    transform="translate(0 36)"><circle cx="3.261" cy="3.686" r="2.72" /><circle cx="15.296" cy="3.686"
                                                        r="2.719" /><circle cx="27.333" cy="3.686" r="2.72" /><circle cx="39.369" cy="3.686" r="2.72" /><circle
                                            cx="51.405" cy="3.686" r="2.72" /><circle cx="63.441" cy="3.686" r="2.72" /><circle cx="75.479" cy="3.686"
                                                r="2.72" /><circle cx="87.514" cy="3.686" r="2.719" /></g><g transform="translate(0 49)"><circle cx="3.261"
                                                    cy="2.767" r="2.72" /><circle cx="15.296" cy="2.767" r="2.719" /><circle cx="27.333" cy="2.767" r="2.72" /><circle
                                            cx="39.369" cy="2.767" r="2.72" /><circle cx="51.405" cy="2.767" r="2.72" /><circle cx="63.441" cy="2.767"
                                                r="2.72" /><circle cx="75.479" cy="2.767" r="2.72" /><circle cx="87.514" cy="2.767" r="2.719" /></g><g
                                                    transform="translate(0 61)"><circle cx="3.261" cy="2.846" r="2.72" /><circle cx="15.296" cy="2.846"
                                                        r="2.719" /><circle cx="27.333" cy="2.846" r="2.72" /><circle cx="39.369" cy="2.846" r="2.72" /><circle
                                            cx="51.405" cy="2.846" r="2.72" /><circle cx="63.441" cy="2.846" r="2.72" /><circle cx="75.479" cy="2.846"
                                                r="2.72" /><circle cx="87.514" cy="2.846" r="2.719" /></g><g transform="translate(0 73)"><circle cx="3.261"
                                                    cy="2.926" r="2.72" /><circle cx="15.296" cy="2.926" r="2.719" /><circle cx="27.333" cy="2.926" r="2.72" /><circle
                                            cx="39.369" cy="2.926" r="2.72" /><circle cx="51.405" cy="2.926" r="2.72" /><circle cx="63.441" cy="2.926"
                                                r="2.72" /><circle cx="75.479" cy="2.926" r="2.72" /><circle cx="87.514" cy="2.926" r="2.719" /></g><g
                                                    transform="translate(0 85)"><circle cx="3.261" cy="3.006" r="2.72" /><circle cx="15.296" cy="3.006"
                                                        r="2.719" /><circle cx="27.333" cy="3.006" r="2.72" /><circle cx="39.369" cy="3.006" r="2.72" /><circle
                                            cx="51.405" cy="3.006" r="2.72" /><circle cx="63.441" cy="3.006" r="2.72" /><circle cx="75.479" cy="3.006"
                                                r="2.72" /><circle cx="87.514" cy="3.006" r="2.719" /></g></g></g></g></svg>
                            <svg viewbox="0 0 91 91" className="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-indigo-500
            fill-current"><g stroke="none" strokewidth="1" fillrule="evenodd"><g fillrule="nonzero"><g><g><circle
                                    cx="3.261" cy="3.445" r="2.72" /><circle cx="15.296" cy="3.445" r="2.719" /><circle cx="27.333" cy="3.445"
                                        r="2.72" /><circle cx="39.369" cy="3.445" r="2.72" /><circle cx="51.405" cy="3.445" r="2.72" /><circle cx="63.441"
                                            cy="3.445" r="2.72" /><circle cx="75.479" cy="3.445" r="2.72" /><circle cx="87.514" cy="3.445" r="2.719" /></g><g
                                                transform="translate(0 12)"><circle cx="3.261" cy="3.525" r="2.72" /><circle cx="15.296" cy="3.525"
                                                    r="2.719" /><circle cx="27.333" cy="3.525" r="2.72" /><circle cx="39.369" cy="3.525" r="2.72" /><circle
                                            cx="51.405" cy="3.525" r="2.72" /><circle cx="63.441" cy="3.525" r="2.72" /><circle cx="75.479" cy="3.525"
                                                r="2.72" /><circle cx="87.514" cy="3.525" r="2.719" /></g><g transform="translate(0 24)"><circle cx="3.261"
                                                    cy="3.605" r="2.72" /><circle cx="15.296" cy="3.605" r="2.719" /><circle cx="27.333" cy="3.605" r="2.72" /><circle
                                            cx="39.369" cy="3.605" r="2.72" /><circle cx="51.405" cy="3.605" r="2.72" /><circle cx="63.441" cy="3.605"
                                                r="2.72" /><circle cx="75.479" cy="3.605" r="2.72" /><circle cx="87.514" cy="3.605" r="2.719" /></g><g
                                                    transform="translate(0 36)"><circle cx="3.261" cy="3.686" r="2.72" /><circle cx="15.296" cy="3.686"
                                                        r="2.719" /><circle cx="27.333" cy="3.686" r="2.72" /><circle cx="39.369" cy="3.686" r="2.72" /><circle
                                            cx="51.405" cy="3.686" r="2.72" /><circle cx="63.441" cy="3.686" r="2.72" /><circle cx="75.479" cy="3.686"
                                                r="2.72" /><circle cx="87.514" cy="3.686" r="2.719" /></g><g transform="translate(0 49)"><circle cx="3.261"
                                                    cy="2.767" r="2.72" /><circle cx="15.296" cy="2.767" r="2.719" /><circle cx="27.333" cy="2.767" r="2.72" /><circle
                                            cx="39.369" cy="2.767" r="2.72" /><circle cx="51.405" cy="2.767" r="2.72" /><circle cx="63.441" cy="2.767"
                                                r="2.72" /><circle cx="75.479" cy="2.767" r="2.72" /><circle cx="87.514" cy="2.767" r="2.719" /></g><g
                                                    transform="translate(0 61)"><circle cx="3.261" cy="2.846" r="2.72" /><circle cx="15.296" cy="2.846"
                                                        r="2.719" /><circle cx="27.333" cy="2.846" r="2.72" /><circle cx="39.369" cy="2.846" r="2.72" /><circle
                                            cx="51.405" cy="2.846" r="2.72" /><circle cx="63.441" cy="2.846" r="2.72" /><circle cx="75.479" cy="2.846"
                                                r="2.72" /><circle cx="87.514" cy="2.846" r="2.719" /></g><g transform="translate(0 73)"><circle cx="3.261"
                                                    cy="2.926" r="2.72" /><circle cx="15.296" cy="2.926" r="2.719" /><circle cx="27.333" cy="2.926" r="2.72" /><circle
                                            cx="39.369" cy="2.926" r="2.72" /><circle cx="51.405" cy="2.926" r="2.72" /><circle cx="63.441" cy="2.926"
                                                r="2.72" /><circle cx="75.479" cy="2.926" r="2.72" /><circle cx="87.514" cy="2.926" r="2.719" /></g><g
                                                    transform="translate(0 85)"><circle cx="3.261" cy="3.006" r="2.72" /><circle cx="15.296" cy="3.006"
                                                        r="2.719" /><circle cx="27.333" cy="3.006" r="2.72" /><circle cx="39.369" cy="3.006" r="2.72" /><circle
                                            cx="51.405" cy="3.006" r="2.72" /><circle cx="63.441" cy="3.006" r="2.72" /><circle cx="75.479" cy="3.006"
                                                r="2.72" /><circle cx="87.514" cy="3.006" r="2.719" /></g></g></g></g></svg>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GetQuote;