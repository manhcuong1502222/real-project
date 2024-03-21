// File: Accounts.js
import React, { useState } from 'react';
import { Button, Col, Layout, Row, Space, Typography } from 'antd';
import AccountForm from './components/accountForm';
import AccountList from './components/accountsList';

const { Content } = Layout;
const { Title } = Typography;

const Accounts = () => {
    const [showAccountForm, setShowAccountForm] = useState(false); // State để kiểm soát việc hiển thị AccountForm
    const [accounts, setAccounts] = useState([]); // State để lưu danh sách các tài khoản

    const handleOpenAccountForm = () => {
        setShowAccountForm(true);
    };

    const handleCloseAccountForm = () => {
        setShowAccountForm(false);
    };

    const saveAccount = (account) => {
        setAccounts(prevAccounts => [...prevAccounts, account]); // Thêm tài khoản mới vào danh sách
    };

    return (
        <Content className='a'>
            <div className='b'>
                <Row gutter={[12, 12]} className='tw-mb-4'>
                    <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                        <Title level={3}>Danh sách tài khoản</Title>
                    </Col>
                    <Col span={24} md={{ span: 12 }} lg={{ span: 16 }}>
                        <Space
                            align='center'
                            className='tw-w-full tw-justify-end'
                            style={{ marginTop: '20px', textAlign: 'right' }}
                        >
                            <Button
                                title='Tạo mới tài khoản'
                                type='primary'
                                className='tw-bg-primary'
                                onClick={handleOpenAccountForm} // Gọi hàm khi nhấn nút "Tạo mới tài khoản"
                            >
                                Tạo mới
                            </Button>
                        </Space>
                    </Col>
                </Row>
                <div className='tw-flex-1'>
                    <AccountList accounts={accounts} /> {/* Truyền danh sách tài khoản vào AccountList */}
                </div>
            </div>
            <AccountForm open={showAccountForm} handleClose={handleCloseAccountForm} saveAccount={saveAccount} /> {/* Truyền state và hàm xuống AccountForm */}
        </Content>
    );
}

export default Accounts;
