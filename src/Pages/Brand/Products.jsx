import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = ({ products }) => {

    const { _id, name, price, rating, type, photo, brand } = products;

    
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='h-full w-full lg:w-[330px]' src={photo} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{brand}</h2>
                    <p>Model: {name}</p>
                    <p>Type: {type}</p>
                    <p>Price: {price}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${brand}/${_id}`}><button className="outline-white p-2 rounded-lg hover:bg-[#ff6969] hover:text-white border border-[#ff6969] text-[#ff6969]">Details</button></Link>
                        <Link to={`/update/${brand}/${_id}`}><button className="outline-white p-2 rounded-lg hover:bg-[#ff6969] hover:text-white border border-[#ff6969] text-[#ff6969]">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;