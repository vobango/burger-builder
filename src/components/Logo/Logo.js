import React from 'react'
import imgSource from '../../assets/images/burger-logo.png'
import classes from './Logo.css'

const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={imgSource} alt="Burger logo" />
        </div>
    )
}

export default logo