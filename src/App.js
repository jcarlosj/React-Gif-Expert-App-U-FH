import React, { useState } from 'react';

/** Component */
import { SearchCategory } from './components/SearchCategory';
import { CategoryList } from './components/CategoryList';

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
                        <CategoryList 
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