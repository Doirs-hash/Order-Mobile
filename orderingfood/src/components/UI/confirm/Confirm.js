import React from 'react';
import Backgrop from '../backgrop/Backdrop';
import classes from './Confirm.module.css'

//是否清空购物车弹窗
const Confirm=(props)=> {
    
    const cancel=(e)=>{
        e.stopPropagation()
        props.onCancel(e)
    }

    return (
        <Backgrop className={classes.backgrop}>
            <div className={classes.confirm}>
                <p className={classes.text}>{props.confirmText}</p>
                <div className={classes.button}>
                    <button className={classes.cancel} onClick={(e)=>{cancel(e)}}>取消</button>
                    <button className={classes.ok} onClick={(e)=>props.onOk(e)} >确认</button>
                </div>
            </div>
        </Backgrop>
    );
}

export default Confirm;