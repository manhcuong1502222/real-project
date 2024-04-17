// Accounts.jsx
import React, { useState } from 'react';
import { Button, Col, Layout, Row, Space, Typography } from 'antd';

import AccountForm from './components/accountForm';
import AccountList from './components/accountsList';
import Data from './Context/Data';

const { Content } = Layout;
const { Title } = Typography;

const Accounts = () => {
    const [showAccountForm, setShowAccountForm] = useState(false);
    const [accounts, setAccounts] = useState(Data()); // Initialize accounts with initial data

    const handleOpenAccountForm = () => {
        setShowAccountForm(true);
    };

    const handleCloseAccountForm = () => {
        setShowAccountForm(false);
    };

    const saveAccount = (account) => {
        setAccounts(prevAccounts => [...prevAccounts, account]); // Update accounts state with new account
    };

    return (
        <Content className='a'>
            <div className='b'>
                <Row justify="space-between" align="middle" className='c'>
                    <Col>
                        <Title level={3} style={{ marginLeft: '20px', fontWeight: 'bold' }}>Danh sách tài khoản</Title>
                    </Col>
                    <Col>
                        <Space>
                            <Button
                                title='Tạo mới tài khoản'
                                type='primary'
                                className='d'
                                onClick={handleOpenAccountForm}
                                style={{ marginRight: '20px' }}
                            >
                                Tạo mới
                            </Button>
                        </Space>
                    </Col>
                </Row>
                <div className='e'>
                    <AccountList accounts={accounts} /> {/* Pass updated accounts data */}
                </div>
            </div>
            <AccountForm open={showAccountForm} handleClose={handleCloseAccountForm} saveAccount={saveAccount} />
        </Content>
    );
}

export default Accounts;
