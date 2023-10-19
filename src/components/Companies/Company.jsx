import React from 'react';
import { Link } from 'react-router-dom';

const Company = ({ company }) => {

    const { Id, BrandName, Image } = company;

    return (
        <Link to={`/brands/${BrandName}`}>
            <div>
                <div className='border border-gray-500 rounded-lg p-4 h-[300px]'>
                    <img className='h-full w-full rounded-lg' src={Image} alt="" />
                    {/* <h1 className='text-4xl font-bold mt-6 text-center'>{BrandName}</h1> */}
                </div>
            </div>
        </Link>
    );
};

export default Company;