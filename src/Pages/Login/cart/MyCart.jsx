import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import CartProducts from './CartProducts';

const MyCart = () => {

    const loadedCarts = useLoaderData();
    const [carts, setCarts] = useState(loadedCarts);


    return (
        <div className='px-6 md:px-16 lg:px-24 py-10 bg-gray-50'>
            <Helmet>
                <title>CarGo | My Cart</title>
            </Helmet>
            <div className='my-10'>
                <h1 className='text-4xl font-bold text-center'>Your Cart</h1>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

                {
                    carts.map(product => <CartProducts 
                        key={product._id} 
                        product={product}
                        carts={carts}
                        setCarts={setCarts}
                        ></CartProducts>)
                }
            </div>


        </div>
    );
};

export default MyCart;