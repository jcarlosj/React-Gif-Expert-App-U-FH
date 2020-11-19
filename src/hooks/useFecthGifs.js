import { useState, useEffect } from 'react';

/** Helper */
import { requestToGiphy } from '../helpers/giphyHelper';

/** Custom Hook */
export const useFetchGifs = ( category ) => {

    const [ state, setState ] = useState({
        loading: true,
        data: []
    });

    useEffect( () => {
        requestToGiphy( category )
            .then( gifs => {

                setTimeout( () => {

                    setState({
                        loading: false,
                        data: gifs
                    });
                    console.log( gifs );
                    
                }, 2000 );

            })
            .catch( error => console.log );
    }, [ category ] );

    return state;
}