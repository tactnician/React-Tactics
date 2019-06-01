import React, {useState, useEffect} from 'react'
// import firebase from '../../firebase'
import * as firebase from 'firebase';
import config from './firebase-config';
import Issue from "../Issues";

firebase.initializeApp(config);

export default function App(props) {
    const [issue, setIssue] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const issueRef = firebase.database().ref('issues');
        console.log(issueRef);

        return () => {
            issueRef.once('value', function(snapshot){
                console.log(snapshot.val());

                setIssue(snapshot.val());
                console.log(issue)
                setLoading(false);
                console.log(loading);
            })
        }
    });

    return(
        <div className="App">
            <h3>Hive Alive</h3>
            {props.children && React.cloneElement(props.children, {
                firebase: firebase.database().ref('issues'),
                issues: issue,
                loading: loading
            })}
        </div>
    )
}