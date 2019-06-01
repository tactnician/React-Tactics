import React, {useState, useEffect} from 'react';

import { auth, googleProvider                } from "./firebase";

const Signup = (props) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUpWithGoogle = async () => {
        try {
            const user = await auth.signUpWithGoogle(googleProvider);
            console.log('user:', user);
        } catch (error) {
            console.log(error.message)
        }
    }

    const signUpWithEmailAndPassword = async () => {
        try {
            const user = await auth.createUserWithEmailAndPassword(email, password);
            console.log(user);
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div>
        <form autoComplete="off">
            <input
                label="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                label="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button type='button' onClick={signUpWithEmailAndPassword}>
                Sign Up
            </button>
        </form>
        <button type='button' onClick={signUpWithGoogle}>
            Sign Up with Google
        </button>
    </div>
    )
}

export default Signup
