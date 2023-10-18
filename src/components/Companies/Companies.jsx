import React, { useEffect, useState } from 'react';
import Company from './Company';

const Companies = () => {

    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        fetch('/companies.json')
        .then(result => result.json())
        .then(data => setCompanies(data))
    },[])


    return (
        <div>
            <h1 className='my-10 text-4xl font-bold text-center'>The companies</h1>

            {
                companies.map(company => <Company key={company.Id} company={company}></Company>)
            }
        </div>
    );
};

export default Companies;