import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import NavBar from './Components/Layout/NavBar';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import BooksItems from './Components/Books/BooksItems';
import { Container, Row } from 'react-bootstrap';
import SearchBooks from './Components/Books/SearchBooks';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      loading: false,
    }
  }
  //get Data 
  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const res = await Axios.get(`https://www.googleapis.com/books/v1/volumes?q=search+terms}`);
      this.setState({
        books: res.data.items,
      }, console.log(res.data.items)

      );
    } catch (error) {
      console.log(error);
    }
  }

  // Search Books
  searchBooks = async term => {
    const res = await Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${term}}`);
    this.setState({ books: res.data.items, loading: false });

  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <SearchBooks searchBooks={this.searchBooks} />
        <Container>
          <Row className="myItems">
            {
              this.state.books.length > 0 ?
                this.state.books.map((book, i) =>
                  book ?
                    <BooksItems key={i} book={book} deleteTask={this.deleteTask} />
                    : null
                )
                : null
            }
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
