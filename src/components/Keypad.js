// Code Keypad Component Here
import React from 'react'

function Keypad (){

    const handleChange = function (event) {
        console.log('Entering password...')
    }

    return (
        <div>
            <input type="password"
                   onChange={handleChange}>
            </input>
        </div>
    )
}

export default Keypad;