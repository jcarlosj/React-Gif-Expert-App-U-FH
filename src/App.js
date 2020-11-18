import React, { useState } from 'react';

/** Component */
import { SearchCategory } from './SearchCategory'

/** Functional Component */
const App = () => {

    const [ categories, setCategories ] = useState(
        [ 'Movies', 'Series', 'Comics' ]
    );

    return (  
        <>
            <h2>GifExpertApp</h2>
            <SearchCategory />
            <hr />

            <ol>
                {   categories.map( ( category, idx ) => {
                        return <li key={ idx }>{ category }</li>;
                    }) 
                }
            </ol>
        </>
    );
}
 
export default App;