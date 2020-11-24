import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { useFetchGifs } from '../../hooks/useFecthGifs';

describe( 'Hook: useFetchGifs', () => {

    test( 'debe retornar el estado inicial', () => {
        
        const { loading, data:images } = useFetchGifs( 'Superman' );
        console.log( loading, images );

    });
    
});