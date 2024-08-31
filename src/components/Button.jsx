import React from 'react'
import './Button.css'

const Button = ({title,type,disable, onClick}) => {
  return (
    <>
        <button
            className={`btn ${
                (type === 'add' && 'add') || 
                (type ==='remove' && 'remove') ||
                (type ==='multiply' && 'multiply') ||
                (type === 'checkout' && 'checkout')
            }`}
            disabled={disable}
            onClick={onClick}
        >
            {title}
        </button>
    </>
  )
}

export default Button