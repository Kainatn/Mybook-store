import React from 'react';
import Books from '../Books/Books';

import { Layout } from 'antd';
import SearchBooks from '../Books/SearchBooks';
const { Content } = Layout;
const MainContent = () => {
    return (
        <div>
            <Content style={{ background: '#8080800d' }}>
                <SearchBooks />
                <Books />
            </Content>
        </div>
    );
}

export default MainContent;
