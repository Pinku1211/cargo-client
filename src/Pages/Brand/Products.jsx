import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Products = ({ products }) => {

    const {Id, Name, Price, Rating, ShortDescription, Type, Image, BrandName } = products;    

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={Image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{BrandName}</h2>
                <p>Model name: {Name}</p>
                <p>Type: {Type}</p>
                <p>Price: {Price}</p>
                <p>Rating: {Rating}</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${BrandName}/${Id}`}><button className="outline-white p-2 rounded-lg hover:bg-[#ff6969] hover:text-white border border-[#ff6969] text-[#ff6969]">Details</button></Link>
                    <button className="outline-white p-2 rounded-lg hover:bg-[#ff6969] hover:text-white border border-[#ff6969] text-[#ff6969]">Update</button>
                </div>
            </div>
        </div>
    );
};

export default Products;