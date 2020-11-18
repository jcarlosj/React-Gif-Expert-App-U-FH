import React, { useState } from 'react'

export const SearchCategory = ({ setCategories }) => {

    const [ inputValue, setInputValue] = useState( '' );

    const handleInputChange = event => {
        console.log( event.target.value );
        setInputValue( event.target.value );
    }

    const handleSubmit = event => {
        event.preventDefault();

        if( inputValue.trim().length > 2 ) {
            setCategories( categories => [ ...categories, inputValue ] );
            setInputValue( '' );
        }
        
    }

    return (
        <form
            onSubmit={ handleSubmit }
        >
            <pre>{ JSON.stringify( inputValue, null, 4 ) }</pre>
            <input 
                type="text" 
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}
