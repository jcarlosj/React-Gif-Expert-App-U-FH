import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import App from '../App';

describe( '<App />', () => {

    test( 'debe desplegar correctamente', () => {
        
        const wrapper = shallow(
            <App />
        );

        expect( wrapper ).toMatchSnapshot();

    });

    test( 'debe mostrar el listado de categorias', () => {

        const 
            categories = [ 'Mazinger Z', 'Transformers' ],
            wrapper = shallow(
                <App defaultCategory={ categories } />
            );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'CategoryList' ).length ).toBe( categories.length );

    });

});