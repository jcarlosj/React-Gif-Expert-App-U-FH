import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { SearchCategory } from '../../components/SearchCategory';

describe( '<SearchCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(
        <SearchCategory setCategories={ setCategories } />
    );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(
            <SearchCategory setCategories={ setCategories } />
        );
    });

    test( 'debe desplegar correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test( 'debe cambiar contenido de input', () => {
        
        const
            value = 'Testing input',
            $input = wrapper.find( 'input' );

        $input.simulate( 'change', { target: { value } } );
        expect( wrapper.find( 'pre' ).text().trim() ).toBe( JSON.stringify( value, null, 4 ) );

    });

    test( 'NO debe actualizar estados setCategories/setInputValue al lanzar sumbit del formulario con el input vacio', () => {
        
        const $form = wrapper.find( 'form' );

        $form.simulate( 'submit', { preventDefault(){} } );
        expect( setCategories ).not.toHaveBeenCalled();

    });

    test( 'debe actualizar estados setCategory/setInputValue al lanzar sumbit del formulario', () => {

        const
            value = 'Testing input';

        wrapper.find( 'input' ).simulate( 'change', { target: { value } } );
        wrapper.find( 'form' ).simulate( 'submit', { preventDefault(){} } );

        expect( setCategories ).toHaveBeenCalled();                                 //  Que haya sido llamada la funcion setCategories
        expect( setCategories ).toHaveBeenCalledTimes( 1 );                         //  Que haya sido llamada una ves la funcion setCategories
        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) );     //  Que haya sido llamada con una funcion por parametro la funcion setCategories
        expect( wrapper.find( 'input' ).prop( 'value' ) ).toBe( '' );               //  Que el valor del input este vacio

    });
    
});