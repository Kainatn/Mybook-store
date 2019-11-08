import { Row, Col, Card, Container } from 'react-bootstrap';
import './SeacrhBooks.css'

import React, { Component } from 'react';

export class SearchBooks extends Component {

    state = {
        term: ''
    }
    onChangeEnter = event => {
        this.setState({ term: event.target.value });
    };
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (

            <Container className="justify-content-center topRow"  >
                <form onSubmit={this.onFormSubmit} >
                    <Row className="col-12">  <Col className="col-12  searchbox input-group" >
                        <input type="text" className="form-control" placeholder="Search Books" aria-label="Recipient's username" aria-describedby="basic-addon2"
                            value={this.state.term}
                            onChange={this.onChangeEnter}
                        />
                        <div className="input-group-append" >
                            <button className="input-group-text button" onChange={this.onChangeEnter} >Search</button>
                        </div>
                    </Col>
                    </Row>
                </form>
            </Container >

        );
    }
}

export default SearchBooks;




