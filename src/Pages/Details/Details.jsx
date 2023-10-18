import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Details = () => {

    const { id, brandName } = useParams()
    const brands = useLoaderData()
    const SelectedBrand = brands.find(brand => brand.BrandName == brandName);
    const brandProducts = SelectedBrand.products
    const product = brandProducts.find(product => product.Id == id);
    console.log(product)


    return (
        <div>
            <img src='' alt="" />
            <div className='ml-10 space-y-3'>
                <h1 className='text-3xl font-bold'>{product.BrandName}</h1>
                <h1 className='text-2xl font-semibold'>Model: {product.Name}</h1>
                <h1 className='text-2xl font-semibold'>Price: {product.Price}</h1>
                <h1 className='text-2xl font-semibold'>Rating: {product.Rating}</h1>
                <h1 className='text-2xl font-semibold'>Type: {product.Type}</h1>
                <h1 className='text-2xl font-semibold'>{product.ShortDescription}</h1>
            </div>
            <Link to='/mycart'>
                <div className="w-fit mx-auto my-6">
                    <button className=' outline-white p-2 rounded-lg hover:bg-[#ff6969] hover:text-white border border-[#ff6969] text-[#ff6969]'>Add to cart</button>
                </div>
            </Link>
        </div>
    );
};

export default Details;