import {  Col, Card } from 'react-bootstrap';
import './BooksItmes.css'

import React, { Component } from 'react';

export class BooksItems extends Component {
    render() {
        console.log(this.props.Book.volumeInfo.imageLinks);
        return (
            
            this.props.Book?
            <Col className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <Card className="card " >
                    <Card.Body>
                    <Card.Title>
                        {
                            this.props.Book.volumeInfo.imageLinks?
                            <img src={this.props.Book.volumeInfo.imageLinks.thumbnail} className="img-thumbnail"/>
                            : null
                        }
                    </Card.Title>
                        <Card.Text>
                            {/* <p>{this.props.Books.volumeInfo.authors}</p> */}
                           <h5>{this.props.Book.volumeInfo.title}</h5>
                           <h6>Published: {this.props.Book.volumeInfo.publisher}</h6>
                        </Card.Text>
                    
                    </Card.Body>
                </Card >
                </Col>
                : null
              
        );

    }
}


export default BooksItems;

