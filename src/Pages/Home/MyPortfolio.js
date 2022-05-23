import React from 'react';
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
    return (
        <article class="p-4 bg-gray-800 border border-gray-700 rounded-xl">
            <div class="flex items-center">


                <div class="ml-3">
                    <h5 class="text-lg font-medium text-white">Raiyan Kabir</h5>
                    <h5 class="text-lg font-medium text-white">Email : kraiyan109@gmail.com</h5>

                </div>
            </div>

            <ul class="mt-4 space-y-2">
                <li>
                    <Link to='#'

                        class="block h-full p-4 border border-gray-700 rounded-lg hover:border-pink-600"
                    >
                        <h5 class="font-medium text-white">Educational Background</h5>

                        <p class="mt-1 text-xs font-medium text-gray-300">
                            Dawra Hadith Graduate
                        </p>
                    </Link>
                </li>

                <li>
                    <Link
                        to='#'
                        class="block h-full p-4 border border-gray-700 rounded-lg hover:border-pink-600"
                    >
                        <h5 class="font-medium text-white">List Of Technologies</h5>

                        <ul class="mt-1 text-xs font-medium text-gray-300">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap and Tailwind</li>
                            <li>Javascript</li>
                            <li>React</li>
                        </ul>
                    </Link>
                </li>
                <li>
                    <div
                        // to='#'
                        class="block h-full p-4 border border-gray-700 rounded-lg hover:border-pink-600"
                    >
                        <h5 class="text-3xl text-secondary">My Projects</h5>

                        <ul class="mt-1 text-xl font-medium text-gray-300 ">

                            <a target="_blank"
                                className='hover:text-sky-700'
                                href="https://assignment-11-7e69c.web.app/">Hiking Warehouse Management</a>
                            <br />
                            <a target="_blank" className='hover:text-sky-700' href="https://assignment-10-4181d.web.app/">RKK Tution</a>
                            <br />
                            <a target="_blank" className='hover:text-sky-700' href="https://snazzy-griffin-d22852.netlify.app/">Watch Review Site</a>

                        </ul>
                    </div>
                </li>
            </ul>
        </article>
    );
};

export default MyPortfolio;