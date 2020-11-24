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

                setState({
                    loading: false,
                    data: gifs
                });
                // console.log( gifs );

            })
            .catch( error => console.log );
    }, [ category ] );

    return state;
}