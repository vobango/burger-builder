import React, { Component, Fragment } from 'react'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/BurgerControls/BurgerControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/OrderSummary/OrderSummary'

const PRICES = {
    bacon: 0.4,
    salad: 0.3,
    meat: 1,
    cheese: 0.5
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            bacon: 0,
            salad: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 2,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients).map(key => {
            return ingredients[key]
        }).reduce((sum, el) => {
            return sum + el
        }, 0)
        this.setState({purchasable: sum > 0})
    }

    purhcaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        console.log('continuing')
        this.setState({purchasing: false})
    }

    addIngredientHandler = (type) => {
        const ingredients = {...this.state.ingredients}
        ingredients[type]++
        const price = this.state.totalPrice + PRICES[type]
        this.setState({
            ingredients: ingredients,
            totalPrice: price
        })
        this.updatePurchaseState(ingredients)
    }

    removeIngredientHandler = (type) => {
        const ingredients = {...this.state.ingredients}
        ingredients[type]--
        if (ingredients[type] < 0) { return }
        const price = this.state.totalPrice - PRICES[type]
        this.setState({
            ingredients: ingredients,
            totalPrice: price
        })
        this.updatePurchaseState(ingredients)
    }

    render () {
        const disabledInfo = {...this.state.ingredients}
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Fragment>
                <Modal show={this.state.purchasing}
                       close={this.purchaseCancelHandler}>
                    <OrderSummary
                        total={this.state.totalPrice}
                        cancel={this.purchaseCancelHandler}
                        continue={this.purchaseContinueHandler} 
                        ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls
                    currentPrice={this.state.totalPrice}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purhcaseHandler}/>
            </Fragment>
        )
    }
}

export default BurgerBuilder