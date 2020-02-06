import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI' 
import BookSheft from './BookSheft'
import PropTypes from 'prop-types'

// Component for the book library search
class BookSearchList extends Component{
        // State of user's query, and books searched
        state ={
            value: '', // User's query
            searchedBooks: [] // Searched books
        }
        MAX_DISPLAY_PER_PAGE = 20; // Maximum number of searched items

        /**
         * @description Run functions that update state query and fetch books from server
         * @param {string} query - The query input by the user
         */
        processing=query=>{
                this.updateValue(query);  // Update the state query
                this.queryData(query);   // Fetch books from server     
        };

        /**
         * @description Fetch books from server, set book's shelf and update state 'searchedBooks'
         * @param {string} query - Query input by the user
         */
        queryData=query=>{
                if(query){
                        // Set timeout not to overwhelmed the app
                        setTimeout(() =>{
                                BooksAPI.search(query, this.MAX_DISPLAY_PER_PAGE).then(
                                    (results) =>{
                                            if(results.length){
                                                    results = this.setBookShelf(results, this.props.books); // Set book's shelf
                                                    this.setState({searchedBooks: results});
                                            }else{
                                                    this.setState({searchedBooks: []});
                                            }                                   
                                    }
                    
                                )
                        }, 200);
                }
        };

        /**
         * @description Update the state 'value' 
         * @param {string} query - Query input by the user
         */
        updateValue=query=>{
                this.setState({
                        value: query
                });
        };

        /**
         * @description Set book's shelf
         * @param {array} searchedResults - Array of books from query[without shelf]
         * @param {array} books - Array of books from main UI
         * @return {array} Array of books each with shelf
         */
        setBookShelf =(searchedResults, books)=>{
                searchedResults.forEach((book, index) =>{
                    const booksToUpdateShelf = books.find((currentBook) => currentBook.id === book.id);
                    if(booksToUpdateShelf){
                            book.shelf = booksToUpdateShelf.shelf;
                    }else{
                            book.shelf = 'none';
                    }
                    searchedResults[index] = book;

                });
                return searchedResults;
        };

        render(){
            const {backButton,onAddBookToShelf} = this.props;

            return(
                <div className="search-books">
                    <div className="search-books-bar">
                    <button className="close-search" onClick = {backButton} >Close</button>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value = {this.state.value}
                            onChange = {(event) =>{this.processing(event.target.value)}}/>
                    </div>
                    </div>
                    <div className="search-books-results">
                        
                        {this.state.searchedBooks.length > 0 && this.state.value.trim().length > 0 && (
                            <BookSheft
                                books={this.state.searchedBooks.filter(
                                    (book) => book.hasOwnProperty('imageLinks')      
                                )} 

                                handleUpdateBookShelf={onAddBookToShelf} />
                        )}
                    </div>
            </div>
            );
        }
}
// Run typechecking on the props
BookSearchList.propTypes = {
    books: PropTypes.array.isRequired,
    backButton: PropTypes.func.isRequired,
    onAddBookToShelf: PropTypes.func.isRequired
};
export default BookSearchList
