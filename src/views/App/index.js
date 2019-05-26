import React, {useState, useEffect} from 'react'
import firebase from '../../firebase'


export default function App() {
    const [issue, setIssue] = useState([]);
    const [loading, setLoading] = useState(true);

    const issueRef = firebase.firestore().doc('Issues/1')
    
    useEffect(() => {
        

        issueRef.on('value', (snapshot)=> {
            console.log(snapshot.val())

            setIssue(snapshot.val());
            setLoading(false);
        })
    });

    return(
        <div className="App">
            Hello from Hive
        </div>
    )
}