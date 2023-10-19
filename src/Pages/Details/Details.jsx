import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Details = () => {

    const product = useLoaderData()
    console.log(product)
   

    return (
        <div className='px-16 lg:px-24 my-10 max-w-6xl mx-auto'>
            <img src={product.photo} alt="" />
            <div className='space-y-3 my-6'>
                <h1 className='text-3xl font-bold'>{product.brand}</h1>
                <h1 className='text-2xl font-semibold'>Model: {product.name}</h1>
                <h1 className='text-2xl font-semibold'>Price: {product.price}</h1>
                <h1 className='text-2xl font-semibold'>Rating: {product.rating}</h1>
                <h1 className='text-2xl font-semibold'>Type: {product.type}</h1>
                <h1 className='text-2xl font-semibold'>{product.description}</h1>
            </div>
            <div className="w-fit mx-auto my-6">
                <button className=' outline-white p-2 rounded-lg hover:bg-[#ff6969] hover:text-white border border-[#ff6969] text-[#ff6969]'>Add to cart</button>
            </div>
        </div>
    );
};

export default Details;
