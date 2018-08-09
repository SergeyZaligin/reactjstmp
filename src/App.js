import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBooks } from './actions/books';
import { books } from './books.json';

class App extends Component {
  
  //const books = this.props.books.books;
  
  render() {
  	// const { books } = this.props;
    return (
      <div className="container">
      	<ul>
          <li>
            {
              books.map(book => (
                <li>
                  {book.title}
                </li>
              ))
            }
          </li>
        </ul>
      </div>
    );
  }
}

// Передача самому компоненту
const mapState = ({ books }) => ({
	books: books.items
});

const mapDispatchToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
});

export default connect(mapState, mapDispatchToProps)(App);
