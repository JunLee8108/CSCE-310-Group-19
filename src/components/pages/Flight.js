import React from 'react';
import '../../App.css';
import NavigationBar from '../NavigationBar';
import FlightSection from '../FlightSection';

const Flight = (props) => {
    return (
        <div>
            <NavigationBar/>
            <FlightSection/>
        </div>
    );
};

export default Flight;
