import React from 'react'
import classes from './BurgerControls.css'
import Control from './Control/Control'

const burgerControls = (props) => {
    const controls = [
        {label: 'Bacon', type: 'bacon'},
        {label: 'Salad', type: 'salad'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Meat', type: 'meat'}
    ]
    
    return (
        <div className={classes.BurgerControls}>
            <div className={classes.OrderInfo}>
                <button
                    className={classes.OrderButton}
                    disabled={!props.purchasable}>ORDER NOW</button>
                <p>Price: <strong>${props.currentPrice.toFixed(2)}</strong></p>
            </div>
            {controls.map(control => {
                return (<Control
                key={control.label}
                label={control.label}
                added={() => props.ingredientAdded(control.type)}
                removed={() => props.ingredientRemoved(control.type)}
                disabled={props.disabled[control.type]} />)
            })}
        </div>
    )
}

export default burgerControls