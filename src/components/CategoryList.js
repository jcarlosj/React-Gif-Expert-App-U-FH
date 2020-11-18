import React, { useState, useEffect } from 'react';

/** Component */
import { CategoryItem } from './CategoryItem';

/** Functional Components */
export const CategoryList = ({ category }) => {

    const [ images, setImages ] = useState( [] );

    useEffect( () => {
        requestToGiphy();
    }, [] );

    const requestToGiphy = async () => {    //  https://developers.giphy.com/
        const 
            url = `https://api.giphy.com/v1/gifs/search?q=superman&limit=9&api_key=6t2zjzJn3x3LILIFUpF6GKKcR95JTJhK`,
            response = await fetch( url ),
            { data } = await response.json();
        // console.log( data );

        const gifs = data.map( image => {
            return {
                id: image.id,
                title: image.title,
                url: image.images?.downsized_medium.url
            };
        });
        console.log( gifs );
        setImages( gifs );

    }

    return (
        <>
            <h3>{ category }</h3>
            
            {   images.map( image => (
                    <CategoryItem 
                        key={ image.id }
                        image={ image }
                    />
                ))
            }
            
        </>
    )
}
