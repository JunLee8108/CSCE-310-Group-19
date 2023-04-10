import React from 'react';
import '../../App.css';
import ActivitySection from '../ActivitySection';
import NavigationBar from '../NavigationBar';

const Activity = (props) => {
    return (
        <div>
            <NavigationBar/>
            <ActivitySection/>
        </div>
    );
};

export default Activity;
