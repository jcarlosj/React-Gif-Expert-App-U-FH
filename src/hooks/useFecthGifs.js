import { useState } from 'react';

/** Custom Hook */
export const useFetchGifs = () => {

    const [ state, setState ] = useState({
        loading: true,
        data: []
    });

    setTimeout( () => {
        setState({
            loading: false,
            data: [ 'uno', 'dos', 'tres', 'cuatro', 'cinco' ]
        });
    }, 3000 );

    return state;
}