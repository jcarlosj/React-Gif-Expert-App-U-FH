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
    
});