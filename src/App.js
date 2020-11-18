import React, { useState } from 'react';

const App = () => {

    const [ categories, setCategories ] = useState(
        [ 'Movies', 'Series', 'Comics' ]
    );

    const handleAddCategoryOne = () => {
        /** Forma 1 */
        setCategories([ 
            ...categories,
            'Cartoon' 
        ]);

    }

    const handleAddCategoryTwo = () => {
        /** Forma 2 */
        setCategories( cats => [ ...cats, 'Ads' ]);
    }

    return (  
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <button onClick={ handleAddCategoryOne }>Add 1</button>
            <button onClick={ handleAddCategoryTwo }>Add 2</button>
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