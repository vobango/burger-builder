import React from 'react'
import Ingredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.css'

const burger = (props) => {
    let ingredients = Object.keys(props.ingredients).map(item => {
        return [...Array(props.ingredients[item])].map((_, i) => {
            return <Ingredient key={item + i} type={item} />
        })
    }).reduce((arr, item) => {
        return arr.concat(item)
    }, [])
    if (ingredients.length === 0) {
        ingredients = <p>Start adding ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <Ingredient type="bread-top" />
            {ingredients}
            <Ingredient type="bread-bottom" />
        </div>
    )
}

export default burger