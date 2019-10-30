import React, { Component, Fragment } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import NavBar from './Components/Layout/NavBar';
import MainContent from './Components/Layout/Content';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
export class App extends Component {

  state = {
    // users: [],
    books: [],
    loading: false
  }
  async componentDidMount() {

    this.setState({ loading: true });
    const res = await Axios.get(`https://www.googleapis.com/books/v1/volumes?q=search+terms}`);
    console.log(res);
 

    this.setState({ users: res.data, loading: false });
  }

  searchUsers = async text => {

    this.setState({ loading: true });
    const res = await Axios.get(`https://www.googleapis.com/books/v1/volumes?q=search+terms}`);
           this.setState({ users: res.data.items, loading: false });

  }
   
  render() {
    return (
      <Fragment>
        <NavBar />
        <MainContent />
      </Fragment>
    );
  }
}

export default App;
