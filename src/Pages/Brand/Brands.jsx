import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Products from './Products';

const Brands = () => {

    const {brand} = useParams();

    const brandProducts = useLoaderData()

    return (
        <div className='px-6 md:px-16 lg:px-24 py-10 bg-gray-50'>
            <h1 className='text-5xl font-bold text-center my-10'>{brand}</h1>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {
                    brandProducts.map(products => <Products key={products._id} products={products}></Products>)
                }
            </div>
        </div>
    );
};

export default Brands;