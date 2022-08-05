import React from 'react';
import classes from './CheckoutItem.module.css'
import Counter from '../../../UI/counter/counter';

const CheckoutItem=(props)=> {
    return (
        <div className={classes.checkoutItem}>
            <div className={classes.mealImg}>
                <img src={props.meal.img} />
            </div>
            <div className={classes.desc}>
                <h2 className={classes.title}>{props.meal.title}</h2>
                <div className={classes.priceOuter}>
                    <Counter meal={props.meal} check={props.check} />
                    <div className={classes.price}>{props.meal.price*props.meal.amount}</div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutItem;