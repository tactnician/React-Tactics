import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './views/App';
import Issues from './views/Issues'
import AddIssue from './views/AddIssue';

const Routes = (props) => {
    return(
        <BrowserRouter {...props}>
            <Route exact path = '/' component={App}>
                <Route path="/issues" compoonent={Issues} />
                <Route path='/add-issue' component={AddIssue} />
            </Route>
        </BrowserRouter>
    )
    
}


export default Routes;