import React from 'react';
import Table from 'react-bootstrap/Table';
import './accountList.scss';

const AccountList = ({ accounts, onDelete, onEdit }) => {
    const handleDelete = (index) => {
        onDelete(index);
    };

    const handleEdit = (index) => {
        onEdit(index);
    };

    return (
        <div className="account-table-container">
            <Table bordered responsive className="account-table">
                <thead className="thead-dark">
                    <tr>
                        <th>Tên tài khoản</th>
                        <th>Mật khẩu</th>
                        <th>Năm sinh</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map((account, index) => (
                        <tr key={index}>
                            <td>{account.username}</td>
                            <td>{account.password}</td>
                            <td>{account.birthYear}</td>
                            <td>{account.phone}</td>
                            <td>{account.email}</td>
                            <td>
                                <button className="edit-button" onClick={() => handleEdit(index)}>Chỉnh sửa</button>
                                <button className="delete-button" onClick={() => handleDelete(index)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default AccountList;