import React from 'react';
import { Row, Col, Card } from 'antd';
import { Layout } from 'antd';
import SearchBooks from '../Books/SearchBooks';
const { Content } = Layout;
const MainContent = () => {
    return (
        <div>
            <Content style={{ background: '#8080800d' }}>
                <SearchBooks/>
                <Row style={{ marginTop: '10px' }}>
                    <Col span={20} offset={2}>

                        <Col className="gutter-row" span={8} style={{ background: 'white' }}>
                            <Card style={{ width: 'auto', borderRadius: '5px', margin: '20px' }}>
                            </Card>
                        </Col>
                        <Col className="gutter-row" span={8} style={{ background: 'white' }}>
                            <Card style={{ margin: '20px', width: 'auto', borderRadius: '5px' }}>
                            </Card>
                        </Col>
                        <Col className="gutter-row" span={8} style={{ background: 'white' }}>
                            <Card style={{ margin: '20px', width: 'auto', borderRadius: '5px' }}>
                            </Card>
                        </Col>
                    </Col>

                </Row>
            </Content>
        </div>
    );
}

export default MainContent;
