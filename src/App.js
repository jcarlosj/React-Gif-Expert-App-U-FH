import React, { useState } from 'react';
import PropTypes from 'prop-types'

/** Component */
import { SearchCategory } from './components/SearchCategory';
import { CategoryList } from './components/CategoryList';

/** Functional Component */
const App = ({ defaultCategory }) => {

    const [ categories, setCategories ] = useState( defaultCategory );

    return (  
        <>
            <h2>GifExpertApp</h2>
            <SearchCategory setCategories={ setCategories } />
            <hr />

            {   categories.map( ( category, idx ) => (
                    <CategoryList 
                        key={ `${ idx }-${ category }`} 
                        category={ category } 
                    />
                )) 
            }
        
        </>
    );
}

App.propTypes = {
    defaultCategory: PropTypes.array
}

App.defaultProps = {
    defaultCategory: [ 'Once Upon a Time' ]
}
 
export default App;