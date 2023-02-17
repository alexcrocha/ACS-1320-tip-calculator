import React from 'react'
import './Input.css';

function Input({ label, value, setValue }) {
  return (
    <li className='list'>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        type="number"
        min="0"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </li>
  )
}

export default Input;