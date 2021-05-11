import React from 'react';
import './inputoption.css';

const InputOption = ({Icon, title, color})=>{
    return(
        <div className="input-option">
            <Icon className="input-option-icon" style={{color:color}}/>
            <h4>{title}</h4>
        </div>
    )
}

export default InputOption;