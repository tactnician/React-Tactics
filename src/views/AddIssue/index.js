import React, {useState} from 'react'

export default function AddIssue(props) {

    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.firebaseRef.push({
            title: title,
        })

        setTitle('');
    }

    return (
        <div className ="addIssue">
            <input 
                type = 'text'
                placeholder = "Title your issue"
                onChange = {handleChange}
                value = {title}
            />
            <button 
                type = 'submit'
                onClick = {handleSubmit}
            > 
            Submit
            </button>
            
        </div>
    )
}
