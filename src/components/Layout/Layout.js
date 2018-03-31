import React, { Fragment } from 'react'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer'
import classes from './Layout.css'

const layout = (props) => {
    return (
        <Fragment>
          <Toolbar />
          <Sidedrawer />
          <main className={classes.Content}>{props.children}</main>
        </Fragment>
    )
}

export default layout