import React, { Component } from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import './BooksItmes.css'

export class BooksItems extends Component {
    render() {
        return (


            <Card className="card" >
                <Card.Body>
                    <Card.Title>mybook</Card.Title>
                    <Card.Text>
                        i made this book
                         </Card.Text>

                </Card.Body>
            </Card >

        );
    }
}

export default BooksItems;
