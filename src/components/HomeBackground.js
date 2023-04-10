import React from 'react';
import '../App.css';
import './HomeBackground.css';

function HomeBackground() {
    return (
        <div>
            <div className='bg'>
                <div className='bgImg'>
                    <img src="img/background.jpeg" width="100%">
                    </img>
                </div>

                <div className='text'>
                    <h1>AnyWhere</h1>
                    <p>Makes Travel Easier</p>
                    <button class="learnMoreButton" color="black">
                        LEARN MORE
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HomeBackground;