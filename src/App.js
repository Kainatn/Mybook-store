import React, { Component, Fragment } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import NavBar from './Components/Layout/NavBar';
// import MainContent from './Components/Layout/Content';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import BooksItems from './Components/Books/BooksItems';
import { Container, Row } from 'react-bootstrap';
import SearchBooks from './Components/Books/SearchBooks';
// const MyData =
//   [
//     {
//       "Title": "my good book",
//       "img": "https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-july-2019/large/bbcjuly19verynice.jpg?1384968217",
//       "written": "Robert AK "
//     },
//     {
//       "Title": " Brain book",
//       "img": "https://i.pinimg.com/236x/82/79/74/827974d98ed5dabfbeecbdae890caebf.jpg",
//       "written": "Armait john "
//     },
//     {
//       "Title": "my goos book",
//       "img": "https://images-na.ssl-images-amazon.com/images/I/41qkYhJRBBL._SX319_BO1,204,203,200_.jpg",
//       "written": "Fister goshling "
//     }
//   ]
export class App extends Component {


  constructor(prop) {
    super();
    this.state = {
      books: [],
      loading: false
    }


  }

  async componentDidMount() {

    this.setState({ loading: true });
    const res = await Axios.get(`https://www.googleapis.com/books/v1/volumes?q=search+terms}`);
    // console.log(res.data.items);

    this.setState({
      books: res.data.items,
    }, console.log(res.data.items)

    );
  }
  // searchUsers = async text => {

  //   this.setState({ loading: true });
  //   const res = await Axios.get(`https://www.googleapis.com/books/v1/volumes?q=search+terms}`);
  //   this.setState({ users: res, loading: false });

  // }

  render() {
    // this.state.books.map(books => {
    //   console.log(books.volumeInfo.imageLinks.thumbnail);
    // })
    return (
      <Fragment>
        <NavBar />
        <SearchBooks />
        <Container>
          {/* <img src={this.state.books.}></img> */}
          <Row className="myItems">
            {
              this.state.books.length > 0?
              this.state.books.map(Book =>
                Book?
                <BooksItems Book={Book} />
                : null
                )
                :null
            }
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default App;
