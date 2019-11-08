import {  Col, Card } from 'react-bootstrap';
import './BooksItmes.css'

import React, { Component } from 'react';

export class BooksItems extends Component {
    render() {
        
        return (
            
            
            <Col className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <Card className="card " >
                    <Card.Body>
                    <Card.Title>
                        <img src={this.props.Books.volumeInfo.imageLinks} className="img-thumbnail"/>
                    </Card.Title>
                        <Card.Text>
                            {/* <p>{this.props.Books.volumeInfo.authors}</p> */}
                           <h5>{this.props.Books.volumeInfo.title}</h5>
                           <h6>Published: {this.props.Books.volumeInfo.publisher}</h6>
                        </Card.Text>
                    
                    </Card.Body>
                </Card >
                </Col>
              
        );

    }
}


export default BooksItems;

