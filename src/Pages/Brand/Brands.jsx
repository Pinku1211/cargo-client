import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Products from './Products';

const Brands = () => {

    const {id} = useParams()

    const brands = useLoaderData()
    const SelectedBrand = brands.find(brand => brand.Id == id)
    
    const brandProducts = SelectedBrand.products

    return (
        <div className='px-16 lg:px-24 py-10 bg-gray-50'>
            <h1 className='text-5xl font-bold text-center my-10'>{SelectedBrand.BrandName}</h1>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {
                    brandProducts.map(products => <Products key={products.Id} products={products}></Products>)
                }
            </div>
        </div>
    );
};

export default Brands;