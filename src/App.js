import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBooks } from './actions/books';

class App extends Component {
  
  //const books = this.props.books.books;
  
  render() {
  	const { books } = this.props.books;
    const { setBooks } = this.props;
    const newBooks = [
      {
        id: 0,
        title: 'Hz'
      }
    ];
    return (
      <div className="container">
      	<h1>{books[0].title}</h1>	 
        <button onClick={setBooks.bind(this, newBooks)}>Load</button>
      </div>
    );
  }
}

const mapState = state => ({
	...state
});

const mapDispatchToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
});

export default connect(mapState, mapDispatchToProps)(App);
