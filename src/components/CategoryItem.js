import React from 'react';

export const CategoryItem = ( { image: { title, url } } ) => {
    return (
        <>
            <h4>{ title }</h4>
            <img src={ url } alt={ title } title={ title } />        
        </>
   )
}