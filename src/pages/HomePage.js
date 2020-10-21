import React from 'react';
import Prints from '../Components/Prints';
import {BrowserRouter as Router} from 'react-router-dom';

const HomePage = () => {
    return ( 
        <Router>
            <div className="App">
                <Prints />
            </div>
        </Router>
    );
} 
 
export default HomePage;