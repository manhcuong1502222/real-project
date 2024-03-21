// Accounts.js
import React, { useState } from 'react';
import { Button, Col, Layout, Row, Space, Typography } from 'antd';

import AccountForm from './components/accountForm';
import AccountList from './components/accountsList';

const { Content } = Layout;
const { Title } = Typography;

const Accounts = () => {
    const [showAccountForm, setShowAccountForm] = useState(false);
    const [accounts, setAccounts] = useState([]);

    const handleOpenAccountForm = () => {
        setShowAccountForm(true);
    };

    const handleCloseAccountForm = () => {
        setShowAccountForm(false);
    };

    const saveAccount = (account) => {
        setAccounts(prevAccounts => [...prevAccounts, account]);
    };

    const handleDeleteAccount = (index) => {
        const updatedAccounts = [...accounts];
        updatedAccounts.splice(index, 1);
        setAccounts(updatedAccounts);
    };

    const handleEditAccount = (index, updatedAccount) => {
        const updatedAccounts = [...accounts];
        updatedAccounts[index] = updatedAccount;
        setAccounts(updatedAccounts);
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
                    <AccountList accounts={accounts} onDelete={handleDeleteAccount} onEdit={handleEditAccount} />
                </div>
            </div>
            <AccountForm open={showAccountForm} handleClose={handleCloseAccountForm} saveAccount={saveAccount} />
        </Content>
    );
}

export default Accounts;
