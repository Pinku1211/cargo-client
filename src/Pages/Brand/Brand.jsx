import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Brand = () => {

    const id = useParams()

    const [products, setProducts] = useState([]);

    useEffect(()=> {
        fetch('/companies.json')
        .then(result => result.json())
        .then(data => setProducts(data))
    },[])
    console.log(products.Id)

    const SelectedProduct = products.find(product => product.Id == id)
    console.log(SelectedProduct)
    return (
        <div>
            <h1>Brands</h1>
        </div>
    );
};

export default Brand;