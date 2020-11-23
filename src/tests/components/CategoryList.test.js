import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { CategoryList } from '../../components/CategoryList';

describe( '<CategoryList />', () => {

    const
        category = 'Game of Thrones',
        key = 'uiey82uy82fe',
        wrapper = shallow(
            <CategoryList 
                key={ key } 
                category={ category } 
            />
        );

    test( 'debe desplegar correctamente', () => {
        // console.log( wrapper.debug() );

        expect( wrapper ).toMatchSnapshot();    //  Verifica que un valor coincida con la instantánea (Snapshop) más reciente

    });

});