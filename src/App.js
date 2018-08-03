import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  
  //const books = this.props.books.books;
  
  render() {
  	console.log(this.props);
    return (
      <div className="container">
      	<h1>Hello world!!!</h1>	 
      </div>
    );
  }
}

const mapState = state => ({
	...state
});


export default connect(mapState)(App);
