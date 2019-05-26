import React, {useState, useEffect} from 'react'
import firebase from '../../firebase'


export default function App(props) {
    const [issue, setIssue] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const issueRef = firebase.database().ref('Issues');
        console.log(issueRef);

        issueRef.once('value', function(snapshot){
            console.log(snapshot.val());

            setIssue(snapshot.val());
            console.log(issue)
            setLoading(false);
            console.log(loading);
        })

    // useEffect(() => {
        
    // });

    return(
        <div className="App">
            <h3>Hive Alive</h3>
            {props.children && React.cloneElement(props.children, {
                firebaseRef: firebase.database().ref('Issues'),
                issues: issue,
                loading: loading
            })}
        </div>
    )
}