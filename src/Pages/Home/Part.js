import React from 'react';

const Part = ({ part }) => {
    const { name, img, price, description, availableQuantity, minimumOrderQuantity } = part
    return (
        <div class="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p>Available Quantity: {availableQuantity} pc.</p>
                <p>Min. Order Quantity: {minimumOrderQuantity} pc.</p>
                <h3>Price: {price}</h3>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Part;