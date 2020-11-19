import React from 'react';

/** Hooks */
import { useFetchGifs } from '../hooks/useFecthGifs';

/** Component */
import { CategoryItem } from './CategoryItem';

/** Functional Components */
export const CategoryList = ({ category }) => {

    const { loading, data:images } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>

            {   loading && <p className="animate__animated animate__flash">Cargando...</p> }

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
