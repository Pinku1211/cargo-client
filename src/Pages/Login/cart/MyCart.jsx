import React from 'react';
import { Helmet } from 'react-helmet-async';

const MyCart = () => {
    return (
        <div>
            <Helmet>
                <title>CarGo | My Cart</title>
            </Helmet>
            <div>
                <h1>My cart</h1>
            </div>
        </div>
    );
};

export default MyCart;