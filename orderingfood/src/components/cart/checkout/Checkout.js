import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import classes from './Checkout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../../store/cart-context';
import CheckoutItem from './checkoutItem/CheckoutItem';
import Bar from './bar/Bar';

//结算界面

const checkoutRoot = document.getElementById('checkout-root')

const Checkout = (props) => {
    const ctx=useContext(CartContext)

    return ReactDOM.createPortal(
        <div className={classes.checkout}>
            <div className={classes.close}>
                <FontAwesomeIcon
                    icon={faXmark}
                    onClick={() => props.onHide()} />
            </div>
            <div className={classes.mealsDesc}>
                <header className={classes.header}>
                    <h2 className={classes.title}>餐品详情</h2>
                </header>
                <div className={classes.mealList}>
                    {ctx.items.map(item=> <CheckoutItem key={item.id} meal={item} check/>)}
                </div>
                <footer className={classes.footer}>
                    <p className={classes.price}>
                        {ctx.totalPrice}
                    </p>
                </footer>
            </div>
            <Bar />
        </div>, checkoutRoot)
}

export default Checkout;