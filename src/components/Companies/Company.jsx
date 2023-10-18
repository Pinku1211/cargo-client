import React from 'react';

const Company = ({ company }) => {

    const { Id, BrandName, Image } = company;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={Image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{BrandName}</h2>
                
            </div>
        </div>
    );
};

export default Company;