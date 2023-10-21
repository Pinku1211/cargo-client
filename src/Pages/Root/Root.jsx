import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Root = () => {

    return (
        <div className=''>
            <div className='sticky top-0 z-20'>
                <Navbar></Navbar>
            </div>
            <div className='z-10'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Root;