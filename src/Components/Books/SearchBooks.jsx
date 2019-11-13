import { Row, Col, Container } from 'react-bootstrap';
import './SeacrhBooks.css';
import React, { Component } from 'react';
export class SearchBooks extends Component {

    state = {
        term: '',
        sort: ''
    };

    onSearchBook = e => {
        e.preventDefault();
        this.props.searchBooks(this.state.term);
    }
    handleSearch = e => this.setState({ term: e.target.value });

    handleSort = e => {
        console.log(e.target.value);
        this.setState({ sort: e.target.value });
    }

    //work in process
    sortData = e => {

    }
    render() {
        return (

            <Container className="justify-content-center topRow" >
                <form onSubmit={this.onSearchBook.bind(this)} >
                    <Row className="col-12 ">  <Col className="col-12  searchbox input-group" >
                        <input type="text" className=" form-control" placeholder="Search Books" aria-label="Recipient's username" aria-describedby="basic-addon2"
                            value={this.state.term}
                            onChange={this.handleSearch}
                        />
                        <div className="input-group-append" >
                            <button className="input-group-text button" onChange={this.props.handleSearch} >Search</button>
                            <select defaultValue="Sort" className="input-group-text button" onChange={this.handleSort}>
                                <option value="Sort">Sort</option>
                                <option value="Newest">Newest</option>
                                <option value="Oldest">Oldest</option>
                            </select>
                        </div>
                    </Col>
                    </Row>
                </form>
            </Container >

        );
    }
}

export default SearchBooks;




