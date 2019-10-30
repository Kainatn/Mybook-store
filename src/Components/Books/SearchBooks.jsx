import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import './SeacrhBooks.css'
const SearchBooks = () => {
    return (

        <Container className="justify-content-center topRow"  >
            <Row className="col-12">
                <Col className="col-12  searchbox input-group" >
                    <input type="text" className="form-control" placeholder="Search Books" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append" >
                        <button className="input-group-text button">Search</button>
                    </div>
                </Col>
            </Row>
        </Container>

    );
}

export default SearchBooks;
