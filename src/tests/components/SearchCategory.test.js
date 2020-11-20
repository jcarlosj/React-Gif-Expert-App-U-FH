import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { SearchCategory } from '../../components/SearchCategory';

describe( '<SearchCategory />', () => {

    const
        setCategories = () => {}, 
        wrapper = shallow(
            <SearchCategory setCategories={ setCategories } />
        );

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
    
});