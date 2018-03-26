import React from 'react'
import classes from './Control.css'

const control = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button
                className={classes.Less}
                onClick={props.removed}
                disabled={props.disabled}>&ndash;</button>
            <button
                className={classes.More}
                onClick={props.added}>+</button>
        </div>
    )
}

export default control