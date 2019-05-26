import * as firebase from 'firebase'
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config =  {
    apiKey: "AIzaSyBsFifoQmHCf83F4Iw0IOAinEQOgSOs_tU",
    authDomain: "hive-7a5c3.firebaseapp.com",
    databaseURL: "https://hive-7a5c3.firebaseio.com",
    projectId: "hive-7a5c3",
    storageBucket: "hive-7a5c3.appspot.com",
    messagingSenderId: "500127372674",
    appId: "1:500127372674:web:e9e591a8ab29d63d"
}

firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;

