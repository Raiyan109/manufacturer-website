import React from 'react';

const Part = ({ part }) => {
    const { name, img, price, description } = part
    return (
        <div>
            <h1>this is part {name} </h1>
        </div>
    );
};

export default Part;