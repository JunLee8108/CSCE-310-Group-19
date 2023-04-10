import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Activity from './components/pages/Activity';
import Flight from './components/pages/Flight';
import Home from './components/pages/Home';
import Location from './components/pages/Location';
import Plan from './components/pages/Plan';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Activity' element={<Activity />} />
          <Route path='/Flight' element={<Flight />} />
          <Route path='Location/' element={<Location />} />
          <Route path='/Plan' element={<Plan />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
