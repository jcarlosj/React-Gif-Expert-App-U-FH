import React, { useState, useEffect } from 'react';

/** Helpers */
import { requestToGiphy } from '../helpers/giphyHelper';

/** Component */
import { CategoryItem } from './CategoryItem';

/** Functional Components */
export const CategoryList = ({ category }) => {

    const [ images, setImages ] = useState( [] );

    useEffect( () => {
        requestToGiphy( category )
            .then( setImages )          //  Es igual a: .then( gifs => setImages( gifs ) )
            .catch( error => console.log );
    }, [ category ] );

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
            
                {   images.map( image => (
                        <CategoryItem 
                            key={ image.id }
                            { ...image }    //  Spread
                        />
                    ))
                }
                
            </div>
        </>
    )
}
