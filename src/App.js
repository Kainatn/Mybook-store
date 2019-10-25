import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import NavBar from './Components/Layout/NavBar';
import MainContent from './Components/Layout/Content';
import Axios from '../node_modules/axios';
import Clock from './Components/Books/Clock';
import data from './data'
import 'bootstrap/dist/css/bootstrap.min.css';
export class App extends Component {

  state = {
    // users: [],
    books: data,
    loading: false
  }
  //   async componentDidMount(){

  //     this.setState({loading: true });
  //     const res = await Axios.get(`https://www.googleapis.com/books/v1/volumes?q=search+terms}`);
  //     console.log(res);

  //     this.setState({users: res.data , loading:false});
  // }
  //   searchUsers = async text => {

  //   this.setState({loading: true });
  //     const res = await Axios.get(`https://www.googleapis.com/books/v1/volumes?q=search+terms}`);

  //     this.setState({users: res.data.items, loading:false});

  // }
  render() {
console.log(this.state.books);
    return (
      <div>

        <NavBar />

        <Clock />
        <MainContent />
      
     
        
        {/* <Books loading={this.state.loading} users={this.state.users}/> */}
      </div>
    );
  }
}

export default App;
