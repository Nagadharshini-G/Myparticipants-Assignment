import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Availability from './process.js';

function Home() {
    const navigate = useNavigate();
    return (
        <div className="home-container">
            <h1>Welcome to Availability Scheduler</h1>
            <button className="navigate-button" onClick={() => navigate('/availability')}>
                Go to Availability Form
            </button>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/availability" element={<Availability />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;