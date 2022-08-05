import React, { useContext,useState } from 'react';
import Backgrop from '../../UI/backgrop/Backdrop';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import classes from './CartDetil.module.css'
import CartContext from '../../../store/cart-context';
import Meal from '../../meals/Meal/Meal';
import Confirm from '../../UI/confirm/Confirm';


const CartDetil=(props)=> {
    const ctx=useContext(CartContext)
    const [showConfirm,setShowConfirm]=useState(false)

    //清空购物车界面
    const showConfirmHandle=()=>{
        setShowConfirm(true)
    }

    const okHandle=(e)=>{
        ctx.clearCart()
    }
    const cancelHandle=(e)=>{
        // e.stopPropagation()
        setShowConfirm(false)
    }
    
    return (
        
        <Backgrop onClick={cancelHandle}>
            {showConfirm && <Confirm 
                confirmText={'确认清空购物车吗？'} 
                onCancel={cancelHandle}
                onOk={okHandle}
            />}
            <div 
                className={classes.cartDetil}
                onClick={e=>e.stopPropagation()}//阻止事件的冒泡
            >
                <header className={classes.header}>
                    <h2 className={classes.title}>餐品详情</h2>
                    <div 
                        className={classes.clear}
                        onClick={showConfirmHandle}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                        <span>清空购物车</span>
                    </div>
                </header>
                <div className={classes.cartMeal}>
                    {ctx.items.map(item=> <Meal noDesc key={item.id} meal={item} />)}
                </div>
            </div>
        </Backgrop>
    );
}

export default CartDetil;