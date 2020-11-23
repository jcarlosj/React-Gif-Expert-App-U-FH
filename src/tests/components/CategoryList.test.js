import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { CategoryList } from '../../components/CategoryList';

import { useFetchGifs } from '../../hooks/useFecthGifs';

jest.mock( '../../hooks/useFecthGifs' );        //  Simula un módulo con una versión simulada automáticamente cuando se requiere

describe( '<CategoryList />', () => {

    const
        category = 'Game of Thrones',
        key = 'uiey82uy82fe';

    test( 'debe desplegar correctamente', () => {

        useFetchGifs.mockReturnValue({         //  Valor que se devolverá siempre que se llame a la función simulada
            loading: true,
            data: []
        });

        const wrapper = shallow(
            <CategoryList 
                key={ key } 
                category={ category } 
            />
        );

        // console.log( wrapper.debug() );

        expect( wrapper ).toMatchSnapshot();    //  Verifica que un valor coincida con la instantánea (Snapshop) más reciente

    });

    test( 'debe mostrar registros cuando las imagenes han cargado \'useFetchGifs\'', () => {

        const gifs = [{
            id: 'iiuyuidfsf454rdf',
            title: 'The Simpsons',
            url: 'http://localhost/cualquier/imagen.jpg'
        }];

        useFetchGifs.mockReturnValue({         //  Valor que se devolverá siempre que se llame a la función simulada
            loading: false,
            data: gifs
        });

        const wrapper = shallow(
            <CategoryList 
                key={ key } 
                category={ category } 
            />
        );

        expect( wrapper ).toMatchSnapshot();    //  Verifica que un valor coincida con la instantánea (Snapshop) más reciente

    }); 

});