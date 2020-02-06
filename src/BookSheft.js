import React from 'react'
import PropTypes from 'prop-types'

/**
 * @description Display each book in a grid
 * @param {Object[]} props 
 * @param {array} props.books - Array of books to display 
 * @param {Object} props.handleUpdateBookShelf - Function that updates the book shelf
 */
const BookSheft = props =>{

        return(
                <ol className="books-grid">
                        {props.books.map(book=>(
                        <li key={book.id}>
                                <div className="book">
                                        <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                        <div className="book-shelf-changer">
                                                <select value={book.shelf} onChange={(event) => props.handleUpdateBookShelf(book, event.target.value)}>
                                                        <option value="move" disabled>Move to...</option>
                                                        <option value="currentlyReading">Currently Reading</option>
                                                        <option value="wantToRead">Want to Read</option>
                                                        <option value="read">Read</option>
                                                        <option value="none">None</option>
                                                </select>
                                        </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        <div className="book-authors">{book.authors}</div>
                                </div>
                        </li>

                            
                        ))}
                </ol>
        );

};
// Run typechecking on the props
BookSheft.propTypes = {
    books: PropTypes.array.isRequired,
    handleUpdateBookShelf: PropTypes.func.isRequired
    
};

export default BookSheft


















