import React from 'react';
import { Input, Row, Col} from 'antd';
const { Search } = Input;

const SearchBooks = () => {
    return (
        <div>
            <Row style={{ paddingTop: '3em' }}>
                <Col span={12} offset={7}>
                    <form>
                        <Search placeholder="Search Your Book " onSearch={value => console.log(value)} enterButton style={{}} />
                    </form>
                </Col>
            </Row>
        </div>
    );
}

export default SearchBooks;
