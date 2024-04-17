// AccountList.jsx
import React from 'react';
import { Table, Button } from 'antd';
import './accountList.scss';

const AccountList = ({ accounts, onDelete, onEdit }) => {

    const handleDelete = (index) => {
        onDelete(index);
    };

    const handleEdit = (index) => {
        // Pass the edited account to the onEdit function
        onEdit(accounts[index]);
    };

    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            key: 'index',
            render: (text, record, index) => index + 1
        },
        {
            title: 'Tên tài khoản',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Mật khẩu',
            dataIndex: 'password',
            key: 'password',
        },
        {
            title: 'Năm sinh',
            dataIndex: 'birthYear',
            key: 'birthYear',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Thao tác',
            key: 'action',
            render: (text, record, index) => (
                <span>
                    {/* Pass index to handleEdit function */}
                    <Button className="edit-button" type="primary" onClick={() => handleEdit(index)}>Chỉnh sửa</Button>
                    <Button className="delete-button" type="danger" onClick={() => handleDelete(index)}>Xóa</Button>
                </span>
            ),
        },
    ];

    return (
        <div className="account-table-container">
            <Table columns={columns} dataSource={accounts.map((record, index) => ({ ...record, index }))} bordered />
        </div>
    );
};

export default AccountList;
