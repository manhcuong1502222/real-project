import React, { useState } from 'react';
import { Modal, Button, Form, Input, DatePicker, Alert } from 'antd';
import './accountForm.scss';

const AccountForm = ({ open, handleClose, saveAccount }) => {
    const [form] = Form.useForm();
    const [showEmptyFieldAlert, setShowEmptyFieldAlert] = useState(false);

    const onFinish = (values) => {
        if (!values.email || !values.email.endsWith('@gmail.com')) {
            setShowEmptyFieldAlert(true);
            return;
        }
        saveAccount(values);
        handleClose();
        form.resetFields();
    };

    return (
        <Modal
            className="account-modal"
            title="Thêm tài khoản"
            visible={open}
            onCancel={handleClose}
            footer={[
                <Button key="cancel" onClick={handleClose}>
                    Hủy
                </Button>,
                <Button key="submit" type="primary" onClick={() => form.submit()}>
                    Lưu
                </Button>,
            ]}
        >
            <Form form={form} onFinish={onFinish}>
                <Form.Item
                    label="Tên tài khoản"
                    name="username"
                    rules={[{ required: true, message: 'Vui lòng nhập tên tài khoản!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Mật khẩu"
                    name="password"
                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Năm sinh"
                    name="birthYear"
                    rules={[{ required: true, message: 'Vui lòng chọn năm sinh!' }]}
                >
                    <DatePicker picker="date" style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item
                    label="Số điện thoại"
                    name="phone"
                    rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: 'Vui lòng nhập email!' },
                        { type: 'email', message: 'Email không hợp lệ!' },
                    ]}
                >
                    <Input />
                </Form.Item>
                {showEmptyFieldAlert && (
                    <Alert message="Email phải có đuôi @gmail.com" type="error" showIcon />
                )}
            </Form>
        </Modal>
    );
};

export default AccountForm;