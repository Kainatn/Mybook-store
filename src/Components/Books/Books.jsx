import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row ,Col,Container} from 'react-bootstrap';
import BooksItems from './BooksItems'

export class Books extends Component {
    render() {
        return (
            //     <Row style={{ marginTop: '10px' }}>
            //     <Col span={20} offset={2}>

            //         <Col className="gutter-row" span={8} style={{ background: 'white' }}>
            //             <Card style={{ width: 'auto', borderRadius: '5px', margin: '20px' }}>
            //             <BooksItems /> 
            //             </Card>
            //         </Col>
            //         <Col className="gutter-row" span={8} style={{ background: 'white' }}>
            //             <Card style={{ margin: '20px', width: 'auto', borderRadius: '5px' }}>
            //             <BooksItems />
            //             </Card>
            //         </Col>
            //         <Col className="gutter-row" span={8} style={{ background: 'white' }}>
            //             <Card style={{ margin: '20px', width: 'auto', borderRadius: '5px' }}>
            //             <BooksItems />
            //             </Card>
            //         </Col>
            //     </Col>

            // </Row>
            <Row style={{ marginTop: '30px' }}>

                <Container>
                  <BooksItems/>
                </Container>
            </Row>
        );
    }
}

export default Books;
