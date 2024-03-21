import React from 'react';
import { Table, Button } from 'antd';
import './accountList.scss';

const AccountList = ({ accounts, onDelete, onEdit }) => {

    const handleDelete = (index) => {
        onDelete(index);
    };

    const handleEdit = (index) => {
        onEdit(index);
    };

    const columns = [
        {
            title: 'STT', // Tiêu đề cột số thứ tự
            dataIndex: 'index', // Đặt dataIndex là 'index' để truy cập chỉ số trong dữ liệu
            key: 'index',
            render: (text, record, index) => index + 1 // Sử dụng render để hiển thị số thứ tự
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
