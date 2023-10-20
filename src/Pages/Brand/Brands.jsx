import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Products from './Products';

const Brands = () => {

    const { brand } = useParams();

    const brandProducts = useLoaderData();
    const [loadedImg, setLoadedImg] = useState([]);

    useEffect(() => {
        fetch('/advertise.json')
            .then(result => result.json())
            .then(data => setLoadedImg(data))
    }, [])


    const brandImages = loadedImg.find(brandImg => brandImg.name == brand).images
    console.log(brandImages)

    return (
        <div className='px-6 md:px-16 lg:px-24 py-10 bg-gray-50'>
            <h1 className='text-5xl font-bold text-center my-10'>{brand}</h1>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={brandImages[0]} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={brandImages[1]} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={brandImages[2]} className="w-full" />
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>

            </div>

            <h1 className='text-4xl font-bold text-center my-10'>Our Products</h1>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {
                    brandProducts.map(products => <Products key={products._id} products={products}></Products>)
                }
            </div>
        </div>
    );
};

export default Brands;