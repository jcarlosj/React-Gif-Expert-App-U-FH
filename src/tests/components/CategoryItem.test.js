import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { CategoryItem } from '../../components/CategoryItem';

describe( '<CategoryItem />', () => {

    test( 'debe desplegar el componente correctamente', () => {
        
        const wrapper = shallow(
            <CategoryItem />
        );
        // console.log( wrapper.debug() );

        expect( wrapper ).toMatchSnapshot();    //  Verifica que un valor coincida con la instantánea (Snapshop) más reciente

    });

});