import React from 'react'

export const Result = props => {
    return (
        <div className="outputScreen" id="display">
            {props.currentValue}
        </div>
    )
}
