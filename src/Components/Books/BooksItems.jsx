import React, { Component } from 'react';
import { Row, Col,Card } from 'react-bootstrap';

export class BooksItems extends Component {
    render() {
        return (
            <Row>
                <Col xs={6} md={4}>
                    <Card  text="black">
                    Second, but last
                    </Card>
                </Col>
                <Col xs={6} md={4}>
                <Card  text="black">
                    Second, but last
                    </Card>
                </Col>
                <Col xs={6} md={4}>
                <Card text="black">
                    Second, but last
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default BooksItems;
