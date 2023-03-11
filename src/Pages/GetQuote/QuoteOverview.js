import React from 'react';

const QuoteOverview = () => {
    return (
        <div>

            <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>Desired Operation</option>
                <option>Deep Ocean</option>
                <option>River</option>
                <option>Ice</option>
            </select>
            <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>Choose Vehicle Type</option>
                <option>Submarine</option>
                <option>AUVs</option>
                <option>Seasoar</option>
            </select>
            <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>Choose Part</option>
                <option>Rudder</option>
                <option>Missile</option>
            </select>
        </div>
    );
};

export default QuoteOverview;