import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { requestToGiphy } from '../../helpers/giphyHelper';

describe( 'Helpers', () => {

    describe( 'giphyHelper', () => {

        test( 'debe obtener 9 registros al pasar categoria', async () => {

            const
                category = 'naruto', 
                gifs = await requestToGiphy( category );

            expect( gifs.length ).toBe( 9 );

        });

        test( 'debe obtener 0 registros al no pasar categoria', async () => {

            const
                category = '', 
                gifs = await requestToGiphy( category );

            expect( gifs.length ).toBe( 0 );

        });

    });

});