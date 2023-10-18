import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>CarGo | Home</title>
            </Helmet>
            <h1>This is home</h1>
        </div>
    );
};

export default Home;