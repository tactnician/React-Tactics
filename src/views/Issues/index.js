/*
Redit Style UpVote and Commenting 
Step1 Who Needs What and Why 
Step2 Google Location Search 
Step3 
*/

import React from 'react'

export default function Issues(props) {

    if (props.loading) {
        return(
            <div>
                Loading...
            </div>
        )
    } else {
        return(
            <div className="Issues">
                { props.issues.map((issue) => {
                    return(
                        <div>
                            {issue.title}
                        </div>
                    )
                })}
            </div>
        )
    }
    
}
