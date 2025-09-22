import React from 'react'


function Input({ type, placeholder, value, onChange,autoFocuss }) {

    return (
        <input
            onChange={onChange}
            type={type}
            value={value}
            placeholder={placeholder}
            required
            autoFocus={autoFocuss}
            className='outline-none border border-gray-200 p-2 focus:ring-1 focus:ring-yellow-200 rounded-lg w-full'
        />

    )
}

export default Input
