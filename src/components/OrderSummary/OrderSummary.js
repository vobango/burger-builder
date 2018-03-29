import React, { Fragment } from 'react'
import Button from '../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(item => {
        return (
            <li key={item}>
                <span style={{textTransform: 'capitalize'}}>{item}</span>
                : {props.ingredients[item]}
            </li>
        )
    })
    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>You have selected the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Order total: <strong>${props.total.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button type="Danger" clicked={props.cancel}>CANCEL</Button>
            <Button type="Success" clicked={props.continue}>CONTINUE</Button>
        </Fragment>
    )
}

export default orderSummary