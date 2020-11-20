import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const SearchCategory = ({ setCategories }) => {

    const [ inputValue, setInputValue] = useState( '' );

    const handleInputChange = event => {
        // console.log( event.target.value );
        setInputValue( event.target.value );
        console.log( 'handleInputChange' );
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log( 'handleSubmit', inputValue );

        if( inputValue.trim().length > 2 ) {
            setCategories( categories => [ inputValue, ...categories ] );
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

SearchCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
