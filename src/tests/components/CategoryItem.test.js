import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { CategoryItem } from '../../components/CategoryItem';

describe( '<CategoryItem />', () => {

    const
    image = {
        id: 'ouyy43y4r734',
        title: 'Once Upon a Time',
        url: 'https://media4.giphy.com/media/IBzHGPbQLV5Fm/giphy.gif?cid=3a428325tnk0tt3ae9ee85i0zam2aldtbizw22uyqpllhw15&rid=giphy.gif'
    }, 
    wrapper = shallow(
        <CategoryItem { ...image } />
    );

    test( 'debe desplegar correctamente', () => {
        // console.log( wrapper.debug() );

        expect( wrapper ).toMatchSnapshot();    //  Verifica que un valor coincida con la instantánea (Snapshop) más reciente

    });

    test( 'debe tener titulo en etiqueta h4', () => {

        const $h4 = wrapper.find( 'h4' );        
        expect( $h4.text().trim() ).toBe( image.title );

    });

    test( 'debe tener imagen con src, alt y title como en los props', () => {

        const $img = wrapper.find( 'img' );  
        // console.log( $img.html() );
        // console.log( $img.props() );
        // console.log( $img.props().src );
        // console.log( $img.prop( 'src' ) );
        
        expect( $img.prop( 'src' ) ).toBe( image.url );
        expect( $img.prop( 'alt' ) ).toBe( image.title );
        expect( $img.prop( 'title' ) ).toBe( image.title );

    });

});