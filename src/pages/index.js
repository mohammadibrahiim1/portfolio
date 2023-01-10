import React from 'react';
import About from '../Components/About/About';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <About></About>
        </div>
    );
};

export default Home;