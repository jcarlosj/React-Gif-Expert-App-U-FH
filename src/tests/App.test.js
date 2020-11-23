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

});