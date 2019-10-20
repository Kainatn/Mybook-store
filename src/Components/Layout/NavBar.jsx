import React from 'react';
import {  Row } from 'antd';
import { Layout } from 'antd';
const { Header } = Layout;
const NavBar = () => {
    return (
        <div>
            <Layout className="layout">

                <Header style={{ textAlign: 'center', lineHeight: '10px' }}>
                    <Row style={{ marginBottom: '2em' }}>
                        <img src="https://seeklogo.com/images/O/open-library-logo-0AB99DA900-seeklogo.com.png" alt="logo" height="110px" ></img>
                    </Row>
                </Header>
                {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
            </Layout>
        </div>
    );
}

export default NavBar;
