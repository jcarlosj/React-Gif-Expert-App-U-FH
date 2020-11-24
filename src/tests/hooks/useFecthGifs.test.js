import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { shallow } from 'enzyme';

import { useFetchGifs } from '../../hooks/useFecthGifs';

describe( 'Hook: useFetchGifs', () => {

    test( 'debe retornar el estado inicial', () => {
        
        const 
            { result } = renderHook( () => useFetchGifs( 'Superman' ) ),       //  renderHook(): Renderiza el Hook (debemos pasar el Hook como el retorno de una funcion)
            { loading, data } = result.current;
        
        // console.log( loading, data );

        expect( data ).toEqual( [] );           //  data debe ser un Array vacio
        expect( loading ).toBe( true );         //  loading debe ser true

    });
    
});