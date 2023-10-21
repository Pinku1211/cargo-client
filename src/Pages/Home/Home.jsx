import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Companies from '../../components/Companies/Companies';
import Press from '../../components/Press/Press';
import Discover from '../../components/Press/Discover';

const Home = () => {


    return (
        <div className='dark:bg-slate-600 dark:text-white'>
            <Helmet>
                <title>CarGo | Home</title>
            </Helmet>
         
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/xzC6X0b/blurred-motion-speeding-cars-city-comes-alive-generative-ai.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">FUTURE IS OUR LEGACY</h1>
                        <p className="mb-5">We are committed to relentless innovation to enhance safety and performance for today's world and an automated future.</p>
                        <button className='outline-white p-2 rounded-lg hover:bg-[#ff6969] hover:text-white border border-[#ff6969] text-[#ff6969]'>Know More</button>
                    </div>
                </div>
            </div>
            <Companies></Companies>
            <hr className='w-3/4 mx-auto' />
            <Press></Press>
            <hr className='w-3/4 mx-auto' />
            <Discover></Discover>
            
        </div>
    );
};

export default Home;