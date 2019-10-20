import React, { Component } from 'react';
import { Row, Col } from 'antd';

export class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date().toLocaleString()
        }
        this.upateTime();
    }
    upateTime() {
        setInterval(() => {
            this.setState({
                currentTime: new Date().toLocaleString()
            })
        }, 1000);
    }
    
    render() {
        return (
            <Row style={{padding:'1em' ,color: 'Black' }}>
                <Col span={6}>
                    <h3 style={{fontFamily:'comic sense',textAlign:'center'}}>{ this.state.currentTime}</h3>
                </Col>
            </Row>
        );
    }
}

export default Clock;
