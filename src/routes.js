import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './views/App';
import Issues from './views/Issues'
import AddIssue from './views/AddIssue';

const Routes = (props) => {
    return(
        <>
            <Route exact path = '/' component={App} />
            <Route path="/issues" component={Issues} />
            <Route path='/add-issue' component={AddIssue} />
        </>
    )
    // return(
    //     <Router {...props}>
    //         <div>
    //             <Route exact path = '/' component={App} />
    //             <Route path="/issues" compoonent={Issues} />
    //             <Route path='/add-issue' component={AddIssue} />
    //         </div>
    //     </Router> 
    // )
}


export default Routes;