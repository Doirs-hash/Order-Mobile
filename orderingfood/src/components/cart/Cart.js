import React, { useContext, useEffect, useState } from 'react'
import classes from './Cart.module.css'
import IconImg from '../../asset/bag2.png'
import IconNo from '../../asset/bag4.png'
import CartContext from '../../store/cart-context'
import CartDetil from './cartDetil/CartDetil'
import Checkout from './checkout/Checkout';

const Cart = (props) => {
    const ctx = useContext(CartContext)
    const [showDetals,setShowDetals]=useState(false)
    const [showCheackout,setShowCheackout]=useState(false)
    
    const toggleDetalsHandle=()=>{//展示购物车内的商品
        if(ctx.totalAmount===0) return
        setShowDetals(prevState=>!prevState)
    }

    const showCheackoutHandle=()=>{//显示结账界面
        if(ctx.totalAmount===0) return
        setShowCheackout(prevState=>!prevState)
    }

    const hideCheckHandle=()=>{//结算界面的关闭按钮
        setShowCheackout(false)
    }

    useEffect(()=>{
        if(ctx.totalAmount===0){
            setShowDetals(false)
        }
    },[ctx.totalAmount])

    return (
        <div className={classes.cart} onClick={toggleDetalsHandle}>
            {showCheackout && <Checkout onHide={hideCheckHandle}/>}
            {showDetals && <CartDetil />}
            <div className={classes.icon} >
                {ctx.totalAmount === 0 ?
                    <>
                        <img src={IconNo} />
                        <p className={classes.noMeal}>未选购商品</p>
                    </> :
                    <>
                        <img src={IconImg} />
                        <span className={classes.totalAmount}>{ctx.totalAmount}</span>
                        <p className={classes.price}>{ctx.totalPrice}</p>
                    </>
                }
            </div>

            <button 
                className={`${classes.button} ${ctx.totalAmount === 0 ? classes.disabled : ''}`}
                onClick={showCheackoutHandle}
            >
                去结算
            </button>
        </div>
    );
}

export default Cart;