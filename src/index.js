import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'

// import App from './views/App';
import Routes from './routes';
// import * as serviceWorker from './utils/serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Route 
            exact path='/' 
            component={(props) => <Routes {...props} /> } 
        />
    </BrowserRouter>,
    document.getElementById('root')    
);

// serviceWorker.unregister();
