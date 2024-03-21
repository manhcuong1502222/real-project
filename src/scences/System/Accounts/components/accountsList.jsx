// File: AccountList.js
import React from 'react';

const AccountList = ({ accounts }) => {
    return (
        <div>
            <h2>Danh sách tài khoản</h2>
            <ul>
                {accounts.map((account, index) => (
                    <li key={index}>
                        <p>Tên tài khoản: {account.username}</p>
                        <p>Mật khẩu: {account.password}</p>
                        <p>Năm sinh: {account.birthYear}</p>
                        <p>Số điện thoại: {account.phone}</p>
                        <p>Email: {account.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AccountList;
