import React from 'react';
import PropTypes from 'prop-types';

export const CategoryItem = ( { title, url } ) => {
    return (
        <div className="card animate__animated animate__bounceIn">
            <img src={ url } alt={ title } title={ title } />        
            <h4>{ title }</h4>
        </div>
   )
}

CategoryItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};