import React from 'react';

const Blogs = () => {
    return (
        <div class="space-y-4">
            <details class="p-6 border-l-4 border-green-500 bg-gray-50 group" open>
                <summary class="flex items-center justify-between cursor-pointer">
                    <h5 class="text-lg font-medium text-gray-900">
                        How will you improve the performance of a React Application?
                    </h5>

                    <span
                        class="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <p class="mt-4 leading-relaxed text-gray-700">
                    1. Keeping component state local where necessary . 2. Memoizing React components to prevent unnecessary re-renders. 3. Using React.memo 4. Using the useCallback Hook 5.  Code-splitting in React using dynamic import             </p>
            </details>

            <details class="p-6 border-l-4 border-green-500 bg-gray-50 group">
                <summary class="flex items-center justify-between cursor-pointer">
                    <h5 class="text-lg font-medium text-gray-900">
                        What are the different ways to manage a state in a React application?
                    </h5>

                    <span
                        class="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <p class="mt-4 leading-relaxed text-gray-700">
                    There are four main types of state you need to properly manage in your React apps: 1.Local state. 2.Global state. 3.Server state. 4.URL state.
                </p>
            </details>

            <details class="p-6 border-l-4 border-green-500 bg-gray-50 group">
                <summary class="flex items-center justify-between cursor-pointer">
                    <h5 class="text-lg font-medium text-gray-900">
                        How does prototypical inheritance work?
                    </h5>

                    <span
                        class="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <p class="mt-4 leading-relaxed text-gray-700">
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.
                </p>
            </details>
            <details class="p-6 border-l-4 border-green-500 bg-gray-50 group">
                <summary class="flex items-center justify-between cursor-pointer">
                    <h5 class="text-lg font-medium text-gray-900">
                        What is a unit test? Why should write unit tests?
                    </h5>

                    <span
                        class="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <p class="mt-4 leading-relaxed text-gray-700">
                    Unit tests are typically automated tests run by software developers to ensure that a section of an application meets its design and behaves as intended.
                </p>
            </details>
            <details class="p-6 border-l-4 border-green-500 bg-gray-50 group">
                <summary class="flex items-center justify-between cursor-pointer">
                    <h5 class="text-lg font-medium text-gray-900">
                        Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                    </h5>

                    <span
                        class="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <p class="mt-4 leading-relaxed text-gray-700">
                    When you directly update the state, it does not change state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. You will lose control of the state across all components.
                </p>
            </details>
        </div>
    );
};

export default Blogs;