// React
import React from 'react';
import { render } from 'react-dom';

// Routing
import { BrowserRouter as Router } from 'react-router-dom';


// Root Component
import RootComponent from './root';

// Styling
import './assets/scss/index.scss';
import './assets/css/tailwind.css';

// Application Wrapper
const Application = (
    <Router>
        <RootComponent/>
    </Router>
);

// Render
render ( Application, document.querySelector('#root'))