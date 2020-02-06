# Udacity - MyReads Project

## Project Overview
In the MyReads project, we'll create a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the applicatio

## Get the Project
The starter code was fork and clone from Udacity [repo](https://github.com/udacity/reactnd-project-myreads-starter)

## How to run the project
- Move into the project's root directory and run the command

    ```$ npm install```

    This command will install all the dependencies of the `package.json` file neccessary to run this project

- Then, to start the application, run

    ```$ npm start``` 
    
    The server will be started on the address ```http://localhost:3000/```

    




## App Functionality
In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

    Currently Reading
    Want to Read
    Read

![](public/images/curRead_wantRead.png)
![](public/images/read.png)

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.

![](public/images/ShowOptions.png)

The main page also has a link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. To keep the interface consistent, you may consider re-using some of the code you used to display the books on the main page.

![](public/images/search.png)

When a book is on a bookshelf, it should have the same state on both the main application page and the search page.

![](public/images/correct-use-of-state.gif)

The search page also has a link to / (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.

## References
- [React Official Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeChecking with PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
- [JSDoc](https://jsdoc.app/index.html)
- [React Training](https://reacttraining.com/react-router/web/api/Link)
