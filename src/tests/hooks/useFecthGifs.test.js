import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { shallow } from 'enzyme';

import { useFetchGifs } from '../../hooks/useFecthGifs';

describe( 'Hook: useFetchGifs', () => {

    test( 'debe retornar el estado inicial', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Superman' ) );       //  renderHook(): Renderiza el Hook (debemos pasar el Hook como el retorno de una funcion)
        const { loading, data } = result.current;

        await waitForNextUpdate();      //  Espera por el Hook para actualizar su estado
        
        // console.log( loading, data );

        expect( data.length ).toBe( 0 );        //  data debe ser un Array vacio
        expect( loading ).toBe( true );         //  loading debe ser true

    });

    test( 'debe retornar el estado con un arreglo de imagenes en la data y false en el loading', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Superman' ) );       //  renderHook(): Renderiza el Hook (debemos pasar el Hook como el retorno de una funcion)
        await waitForNextUpdate();      //  Espera por el Hook para actualizar su estado

        const { loading, data } = result.current;

        // console.log( loading, data );

        expect( data.length ).toBe( 9 );     //  data debe ser un Array con 9 registros
        expect( loading ).toBe( false );        //  loading debe ser false 

    });
    
    
});