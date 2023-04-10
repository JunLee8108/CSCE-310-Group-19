import React from 'react';
import '../../App.css';
import NavigationBar from '../NavigationBar';
import HomeBackground from '../HomeBackground';

const Home = (props) => {
    return (
        <div>
            <NavigationBar/>
            <HomeBackground/>
        </div>
    );
};

export default Home;
