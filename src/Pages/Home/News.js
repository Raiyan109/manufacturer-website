import React from 'react';
import IndonesiaSub from '../../assets/images/indonesia-sub.jpg'
import FranceSub from '../../assets/images/french mafia.jpg'
import EnglandSub from '../../assets/images/england sub.jpg'
import EstoniaSub from '../../assets/images/estonia sub.jpg'

const News = () => {
    return (
        <div className='my-20 px-2'>


            <h1 className='text-5xl text-primary font-bold text-center'>News & Insights</h1>
            <h1 className='text-2xl text-center mt-2'>A look at what we are doing in the media</h1>
            <div className='flex justify-center items-center p-14'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                    <article className="flex flex-col bg-gray-50">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52 bg-gray-500" src={IndonesiaSub} />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <a rel="noopener noreferrer" href="#" className="text-xs tracki uppercase hover:underline text-orange-600">Indonesia</a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leadi">Indonesian Government acquires new submarine rescue system in $100M Contract</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                                <span>June 1, 2023</span>
                                <span>2.1K views</span>
                            </div>
                        </div>
                    </article>
                    <article className="flex flex-col bg-gray-50">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52 bg-gray-500" src={FranceSub} />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <a rel="noopener noreferrer" href="#" className="text-xs tracki uppercase hover:underline text-orange-600">France</a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leadi">French Mafia Lord buys 20 AUVs in $10M Contract</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                                <span>August 13, 2023</span>
                                <span>2.2K views</span>
                            </div>
                        </div>
                    </article>
                    <article className="flex flex-col bg-gray-50">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52 bg-gray-500" src={EnglandSub} />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <a rel="noopener noreferrer" href="#" className="text-xs tracki uppercase hover:underline text-orange-600">England</a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leadi">Queen purchases 100 Submarine from our website!</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                                <span>Feb 8, 2023</span>
                                <span>2.3K views</span>
                            </div>
                        </div>
                    </article>
                    <article className="flex flex-col bg-gray-50">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52 bg-gray-500" src={EstoniaSub} />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <a rel="noopener noreferrer" href="#" className="text-xs tracki uppercase hover:underline text-orange-600">Estonia</a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leadi">Estonian Government acquires new Sentry in $50m contract</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                                <span>Sep 1, 2023</span>
                                <span>2.4K views</span>
                            </div>
                        </div>
                    </article>

                </div>
            </div>
        </div>
    );
};

export default News;