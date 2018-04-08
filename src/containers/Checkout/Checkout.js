import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckourSummary'

class Checkout extends Component {
    state = {
        ingredients: {
            bacon: 0,
            cheese: 1,
            meat: 1,
            salad: 1
        }
    }
    render () {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}/>
            </div>
        )
    }
}

export default Checkout