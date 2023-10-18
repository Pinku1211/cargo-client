import React, { useEffect, useState } from 'react';
import Company from './Company';

const Companies = () => {

    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        fetch('/companies.json')
            .then(result => result.json())
            .then(data => setCompanies(data))
    }, [])


    return (
        <div className='my-14'>
            <h1 className='my-10 text-5xl font-bold text-center'>The Brands</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-16 lg:px-24'>
                {
                    companies.map(company => <Company key={company.Id} company={company}></Company>)
                }
            </div>
        </div>
    );
};

export default Companies;