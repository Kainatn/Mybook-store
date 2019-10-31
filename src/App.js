import React, { Component, Fragment } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import NavBar from './Components/Layout/NavBar';
import MainContent from './Components/Layout/Content';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import BooksItems from './Components/Books/BooksItems';
import { Container ,Row} from 'react-bootstrap';
import SearchBooks from './Components/Books/SearchBooks';

const MyData =
  [
    {
      "Title": "my good book",
      "img": "https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-july-2019/large/bbcjuly19verynice.jpg?1384968217",
      "written": "Robert AK "
    },
    {
      "Title": " Brain book",
      "img": "https://i.pinimg.com/236x/82/79/74/827974d98ed5dabfbeecbdae890caebf.jpg",
      "written": "Armait john "
    },
    {
      "Title": "my goos book",
      "img": "https://images-na.ssl-images-amazon.com/images/I/41qkYhJRBBL._SX319_BO1,204,203,200_.jpg",
      "written": "Fister goshling "
    }
  ]
export class App extends Component {


  state = {
    // users: [],
    books: MyData,
    loading: false
  }
  // async componentDidMount() {

  //   this.setState({ loading: true });
  //   const res = await Axios.get(`https://www.googleapis.com/books/v1/volumes?q=search+terms}`);
  //   console.log(res);


  //   this.setState({ users: res.data, loading: false });
  // }

  // searchUsers = async text => {

  //   this.setState({ loading: true });
  //   const res = await Axios.get(`https://www.googleapis.com/books/v1/volumes?q=search+terms}`);
  //          this.setState({ users: res.data.items, loading: false });

  // }

  render() {
    console.log(this.state.books);
    return (
      <Fragment>
        <NavBar />
       <SearchBooks/>
       <Container>
       <Row className=" myItems"> 
        {
          MyData.map(Books =>
            <BooksItems Books={Books}/>)
        }
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default App;
