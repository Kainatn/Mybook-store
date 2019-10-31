import { Row, Col, Card, Container } from 'react-bootstrap';
import './BooksItmes.css'

import React, { Component } from 'react';

export class BooksItems extends Component {
    render() {
        const {
            img,
            Title,
            written
        } = this.props.Books;
        return (
            
            <Col className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <Card className="card " >
                    <Card.Body>
                    <Card.Title>
                        <img src={img} className="img-thumbnail"/>
                    </Card.Title>
                        <Card.Text>
                            <p>{Title}</p>
                            <h6>{written}</h6>
                        </Card.Text>
                    
                    </Card.Body>
                </Card >
                </Col>
              
        );

    }
}


export default BooksItems;

