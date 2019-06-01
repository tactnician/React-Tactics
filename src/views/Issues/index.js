/*
Redit Style UpVote and Commenting 
Step1 Who Needs What and Why 
Step2 Google Location Search 
Step3 
*/

import React from 'react'

export default function Issues(props) {

    const handleUpVote = (Issues, key) => {
        this.props.firebase.ref('Issues/' + key).set({
            title: Issues.title,
            upvote: Issues.upvote + 1,
            downvote: Issues.downvote
        });
    }

    const handleDownVote = (Issues, key) => {
        this.props.firebase.ref('Issues/' + key).set({
            title: Issues.title,
            upvote: Issues.upvote,
            downvote: Issues.downvote + 1
        });
    }


    let issues = props.issues;

    if(!issues) {
        return false;
    }
    
    if (props.loading) {
        return(
            <div>
                Loading...
            </div>
        )
    }


    return(
        <div className="Issues">
            <h3>Issues</h3>
            {Object.keys(Issues).map(key => {
                return(
                    <div key = {key}>
                        <div> Title: {Issues[key].title} </div>
                        <div> UpVotes: {Issues[key].upvote} </div>
                        <div> DownVotes: {Issues[key].downvote} </div>
                        <div>
                            <button
                                onClick = {handleUpVote(Issues[key], key)} //Double Check This
                                type = 'button'
                            >
                                UpVote
                            </button>
                            <button
                                onClick = {handleDownVote(Issues[key], key)}
                                type = 'button'
                            >
                                DownVote
                            </button>
                        </div>
                    </div>
                )
            })}
            {/* { props.issues.map((issue) => {
                return(
                    <div>
                        {issue.title}
                    </div>
                )
            })} */}
        </div>
    )    
}
