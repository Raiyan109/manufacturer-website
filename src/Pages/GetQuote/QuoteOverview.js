import React from 'react';

const QuoteOverview = () => {
    return (
        <div>
            <div className="relative flex justify-center items-center">
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Desired Operation</option>
                    <option>Deep Ocean</option>
                    <option>River</option>
                    <option>Ice</option>
                </select>
            </div>

        </div>
    );
};

export default QuoteOverview;