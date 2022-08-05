import React from 'react';
import TextContext from './textContext';

const A=(props) =>{
    return (
        <TextContext.Consumer>
            {
                (item)=>{
                   return <div>
                        {item.name}-{item.age}
                    </div>
                }
            }
        </TextContext.Consumer>
    );
}

export default A;