import React from 'react'
import './style.css'

export default function RoundedBtn({text,handleClick}) {
    const onClick = () => {
        console.group("oncli")
        handleClick && handleClick();
    }
    return (
        <div>
         <button
          onClick={onClick}
            className="roundBtn">
          {text}
        </button>
            
        </div>
    )
}
