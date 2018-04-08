import React from 'react'
import classes from './Spinner.css'

const spinner = () => {
    return (
        <div className={classes.CubeGrid}>
            <div className={[classes.Cube, classes.Cube1].join(' ')}></div>
            <div className={[classes.Cube, classes.Cube2].join(' ')}></div>
            <div className={[classes.Cube, classes.Cube3].join(' ')}></div>
            <div className={[classes.Cube, classes.Cube4].join(' ')}></div>
            <div className={[classes.Cube, classes.Cube5].join(' ')}></div>
            <div className={[classes.Cube, classes.Cube6].join(' ')}></div>
            <div className={[classes.Cube, classes.Cube7].join(' ')}></div>
            <div className={[classes.Cube, classes.Cube8].join(' ')}></div>
            <div className={[classes.Cube, classes.Cube9].join(' ')}></div>
        </div>
    )
}

export default spinner