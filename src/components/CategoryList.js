import React, { useState, useEffect } from 'react';

/** Hooks */
import { useFetchGifs } from '../hooks/useFecthGifs';

/** Helpers */
import { requestToGiphy } from '../helpers/giphyHelper';

/** Component */
import { CategoryItem } from './CategoryItem';

/** Functional Components */
export const CategoryList = ({ category }) => {

    const { loading, data } = useFetchGifs();

    const [ images, setImages ] = useState( [] );

    useEffect( () => {
        requestToGiphy( category )
            .then( setImages )          //  Es igual a: .then( gifs => setImages( gifs ) )
            .catch( error => console.log );
    }, [ category ] );

    return (
        <>
            <h3>{ category }</h3>

            {   loading
                    ?   <p>Cargando...</p>
                    :   <pre><code>{ JSON.stringify( data, null, 4 ) }</code></pre>
            }

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
