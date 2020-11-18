import React, { useState } from 'react'

export const SearchCategory = () => {

    const [ inputValue, setInputValue] = useState( '' );

    const handleInputChange = event => {
        console.log( event.target.value );
        setInputValue( event.target.value );
    }

    return (
        <form>
            <pre>{ JSON.stringify( inputValue, null, 4 ) }</pre>
            <input 
                type="text" 
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}
