import React, { Component, Fragment } from 'react'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer'

class Layout extends Component {
    state = {
        showSidedrawer: false
    }

    sidedrawerClosedHandler = () => {
        this.setState({ showSidedrawer: false })
    }

    sidedrawerOpenedHandler = () => {
        this.setState({ showSidedrawer: true })
    }

    render () {
        return (
            <Fragment>
                <Sidedrawer 
                    visible={this.state.showSidedrawer}
                    closed={this.sidedrawerClosedHandler} />
                <Toolbar clicked={this.sidedrawerOpenedHandler} />
                <main>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
}

export default Layout