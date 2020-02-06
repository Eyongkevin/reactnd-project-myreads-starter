import React from 'react'
import {Link} from 'react-router-dom'


// Diplay the 'add a book' button that links to the search
const BooksSearchButton =()=>{
    return(
        <div className="open-search">
            <Link to="/search" >Add a book</Link>
        </div>
    );
};

export default BooksSearchButton
