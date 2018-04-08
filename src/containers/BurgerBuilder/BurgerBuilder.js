import React, { Component, Fragment } from 'react'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/BurgerControls/BurgerControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const PRICES = {
    bacon: 0.4,
    salad: 0.3,
    meat: 1,
    cheese: 0.5
}

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 2,
        purchasable: false,
        purchasing: false,
        loading: false
    }

    componentDidMount () {
        axios.get('https://brgrer-4e635.firebaseio.com/ingredients.json')
            .then(res => {
                this.setState({
                    ingredients: res.data, 
                    purchasable: true
                })
            })
            .catch(err => {})
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
        /* this.setState({loading: true})
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Jaanus Maanus',
                address: {
                    street: 'Masina 1',
                    zipCode: '23425',
                    city: 'Tallinn'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(res => {
                console.log(res)
                this.setState({loading: false, purchasing: false})
            })
            .catch(err => {
                console.error(err)
                this.setState({loading: false, purchasing: false})
            }) */
        this.props.history.push('/checkout')    
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
        let orderSummary = null   
        let burger = <Spinner/>
        if (this.state.ingredients) {
            burger = (
                <Fragment>
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
            orderSummary = <OrderSummary
                                total={this.state.totalPrice}
                                cancel={this.purchaseCancelHandler}
                                continue={this.purchaseContinueHandler} 
                                ingredients={this.state.ingredients}/>
        }
        if (this.state.loading) {
            orderSummary = <Spinner/>
        } 

        return (
            <Fragment>
                <Modal show={this.state.purchasing}
                       close={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Fragment>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios)