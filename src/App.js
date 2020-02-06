import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import BookSearchList from './BookSearchList'
import BooksSearchButton from './BooksSearchButton'


class App extends React.Component {
    // State holding books 
    state = {
      books:[] // Array of books to be displayed on the page
    }

    /** 
    * @description Fetch all the books from the server and updates our 'books' state
    */
    componentDidMount(){
        BooksAPI.getAll().then(books =>{
            this.setState({books});
        });
    }
    /**
     * @description Update book shelf(category)
     * @param {array} book - Array of books to update
     * @param {string} option - sheft to update the book
     */
    handleUpdateBookShelf=(book, option)=>{
        BooksAPI.update(book, option).then(() =>{
            book.shelf = option;
            const updatedBooks = this.state.books.filter(currentBook => currentBook.id !== book.id).concat([book]);
            this.setState({books: updatedBooks});
        })

    };


    render() {
        return (
            <div className="app">
                {/* Route redirect to display books in the main UI*/}
                <Route exact path="/" render={()=>(
                    <div className="list-books">

                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <BookList books={this.state.books} handleUpdateBookShelf={this.handleUpdateBookShelf} />
                        <BooksSearchButton />
                    </div>
                )} />
            
                {/* Route redirect to display search component*/}
                <Route  path="/search" render={({history}) =>(
                    <BookSearchList  
                        books={this.state.books} 
                        backButton={() =>{history.push('/')}}
                        onAddBookToShelf={this.handleUpdateBookShelf}/>
                )} />
                            
            </div>

        );
    }
}

export default App
