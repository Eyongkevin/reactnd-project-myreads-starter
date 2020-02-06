import React from 'react'
import BookSheft from './BookSheft'

import PropTypes from 'prop-types'


/**
 * @description remove spaces from a string
 * @param {string} cat - string to remove spaces from
 * @return {string} string with no spaces
 */
const formatCategory =cat=>{
        return cat.replace(/\s/g, '').toLowerCase();
};

// Display books on the main UI 
const BookList = props =>{
    const bookCategoris = ["Currently Reading", "Want To Read","Read"];

    return (
            <div className="list-books-content">
                {bookCategoris.map((cat, index)=>(
                    <div className="bookshelf" key={index}>
                        <h2 className="bookshelf-title">{cat}</h2>
                        <div className="bookshelf-books">
                            
                                <BookSheft 
                                    books={props.books.filter(
                                        (book) => book.shelf.toLowerCase() === formatCategory(cat))}
                                        handleUpdateBookShelf = {props.handleUpdateBookShelf} />                        
                        </div>
                    </div>
                ))}

            </div>
    );
};

// Run typechecking on the props
BookList.propTypes = {
    books: PropTypes.array.isRequired,
    handleUpdateBookShelf: PropTypes.func.isRequired
};

export default BookList