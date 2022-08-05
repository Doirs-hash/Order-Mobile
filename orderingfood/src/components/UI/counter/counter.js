import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import classes from './counter.module.css'
import CartContext from '../../../store/cart-context';

//计数组件
const Counter = (props) => {
    const cxt=useContext(CartContext)
    const addButtonHandle=()=>{
        cxt.addItem(props.meal)
    }

    const subButtonHandle=()=>{
        // props.onSub(props.meal)
        cxt.removeItem(props.meal)
    }

    return (
        <div className={classes.counter}>
            {
                props.meal.amount && props.meal.amount > 0 ? 
                <><button className={`${classes.sub} ${props.check && classes.button}`} onClick={subButtonHandle}><FontAwesomeIcon icon={faMinus} /></button>
                    <span className={classes.count}>{props.meal.amount}</span></> : null
            }

            <button className={`${classes.add} ${props.check && classes.button}`} onClick={addButtonHandle}>
                <FontAwesomeIcon icon={faPlus} />
            </button>

        </div>
    );
}

export default Counter;