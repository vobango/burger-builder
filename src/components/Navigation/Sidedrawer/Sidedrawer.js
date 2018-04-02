import React, { Fragment } from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'
import classes from './Sidedrawer.css'

const sidedrawer = (props) => {
    let classList = [classes.Sidedrawer, classes.Close]
    if (props.visible) {
        classList = [classes.Sidedrawer, classes.Open]
    }

    return (
        <Fragment>
            <Backdrop show={props.visible} hide={props.closed} />
            <div className={classList.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Fragment>
    )
}

export default sidedrawer