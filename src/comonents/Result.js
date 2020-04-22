import React from 'react'

const Result = props => {
    return (
        <div className="outputScreen" id="display">
            {props.currentValue}
        </div>
    )
}

export default Result;