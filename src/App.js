import React, { useState } from 'react';

/** Component */
import { SearchCategory } from './components/SearchCategory';
import { Category } from './components/Category';

/** Functional Component */
const App = () => {

    const [ categories, setCategories ] = useState(
        [ 'Movies' ]
    );

    return (  
        <>
            <h2>GifExpertApp</h2>
            <SearchCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {   categories.map( ( category, idx ) => (
                        <Category 
                            key={ `${ idx }-${ category }`} 
                            category={ category } 
                        />
                    )) 
                }
            </ol>
        </>
    );
}
 
export default App;