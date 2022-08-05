import React from 'react';
import classes from './meal.module.css'
import Counter from '../../UI/counter/counter';

const Meal = (props) => {
    // const count=1
    return (
        <div className={classes.Meal}>
            <div className={classes.imgBox}>
                <img src={props.meal.img} />
            </div>
            <div className={classes.Pleft}>
                <p className={classes.title}>{props.meal.title}</p>
                {props.noDesc ? null : <p className={classes.remarks}>{props.meal.remarks}</p>}
                <div className={classes.priceWrap}>
                    <span className={classes.price}>{props.meal.price}</span>
                    <Counter
                        meal={props.meal}
                    />
                </div>
            </div>
        </div>
    );
}

export default Meal;