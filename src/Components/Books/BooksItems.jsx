import { Col, Card } from 'react-bootstrap';
import './BooksItmes.css'

import React from 'react';

const BooksItems = (props) => {

    // console.log(props.book.volumeInfo.previewLink);
    return (
        props.book ?
            <Col className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <Card className="shadow  card border-bottom-0 rounded-top  "  >
                    <Card.Body>
                        <Card.Title>
                            <a href={props.book.volumeInfo.previewLink} target="new">
                                {
                                    props.book.volumeInfo.imageLinks ?
                                        <img src={props.book.volumeInfo.imageLinks.thumbnail} className="img-thumbnail" alt="Books" />
                                        : <img src="https://images.all-free-download.com/images/graphicthumb/blank_book_311778.jpg" className="img-thumbnail" alt="dummy Books"></img> // : props.deleteTask
                                }
                            </a>
                        </Card.Title>
                        <Card.Text>
                            <h5>{props.book.volumeInfo.title}</h5>
                            <p>{props.book.volumeInfo.authors} {props.book.volumeInfo.publishedDate} </p>

                        </Card.Text>

                    </Card.Body>
                </Card >
            </Col>
            : null

    );
}

export default BooksItems;





