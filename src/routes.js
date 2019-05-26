import React,{useState, useEffect }from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './views/App';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route exact path = '/' component={App}></Route>
        </BrowserRouter>
    )
    
}


export default Routes;