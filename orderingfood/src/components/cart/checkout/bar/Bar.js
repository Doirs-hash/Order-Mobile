import React, { useContext } from 'react';
import classes from './Bar.module.css'
import CartContext from '../../../../store/cart-context';

const Bar=(props) =>{
    const ctx=useContext(CartContext)

    return (
        <div className={classes.bar}>
            <div className={classes.totalPrice}>{ctx.totalPrice}</div>
            <button className={classes.button}>去支付</button>
        </div>
    );
}

export default Bar;