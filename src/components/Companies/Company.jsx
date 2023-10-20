import React from 'react';
import { Link } from 'react-router-dom';

const Company = ({ company }) => {

    const { Id, name, Image } = company;

    return (

        <div>
            <Link to={`/brands/${name}`}>
                <div className='rounded-lg h-[300px]'>
                    <img className='h-full w-full border border-gray-500 rounded-lg' src={Image} alt="" />
                </div>
            </Link>
            <div className='mt-6 '>
                <h1 className='text-4xl font-bold  text-center'>{name}</h1>
            </div>
        </div>

    );
};

export default Company;