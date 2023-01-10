import React from 'react';
import About from '../Components/About/About';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;