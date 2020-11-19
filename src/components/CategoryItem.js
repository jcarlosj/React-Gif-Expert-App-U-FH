import React from 'react';

export const CategoryItem = ( { title, url } ) => {
    return (
        <div className="card">
            <img src={ url } alt={ title } title={ title } />        
            <h4>{ title }</h4>
        </div>
   )
}