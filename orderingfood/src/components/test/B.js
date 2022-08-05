import React, { useContext } from 'react';
import TextContext from './textContext';

const B=(props)=> {
    const ctx=useContext(TextContext)
    return (
        <div>
            {ctx.name}-{ctx.age}
        </div>
    );
}

export default B;