import React from 'react';

export const Category = ({ category }) => {

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
    }
    requestToGiphy();

    return (
        <>
            <h3>{ category }</h3>
        </>
    )
}
