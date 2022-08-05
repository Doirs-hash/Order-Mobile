import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classes from './FilterMeal.module.css'
//搜索组件
const FilterMeal = (props) => {
    const [keyWord,setKeyWord]=useState('')

    const search=(e)=>{
        setKeyWord(e.target.value.trim())
    }

    useEffect(()=>{

        const timer=setTimeout(()=>{
            props.searchChange(keyWord)
        },1000)

        return ()=>{
            clearTimeout(timer)
        }
    },[keyWord])

    return (
        <div className={classes.filterMeal}>
            <div className={classes.outInput}>
                <input 
                    className={classes.searchInput} 
                    placeholder='请输入搜索名称' 
                    onChange={search}
                />
                <FontAwesomeIcon className={classes.icon} icon={faSearch} />
            </div>
        </div>

    );
}

export default FilterMeal;