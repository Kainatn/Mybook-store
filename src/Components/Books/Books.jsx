import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import BooksItems from './BooksItems'
import './Books.css';

export class Books extends Component {
    render() {
        return (
            <Container>
                <Row style={{ marginTop: '30px' }}>
                    <BooksItems />
                    <BooksItems />
                    <BooksItems />
                </Row>
            </Container>
        );
    }
}

export default Books;
