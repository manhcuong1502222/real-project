import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';

const AccountForm = ({ open, handleClose }) => {
    const [accountInfo, setAccountInfo] = useState({
        name: '',
        birthYear: '',
        phone: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccountInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        // Gửi dữ liệu thông tin tài khoản lên server hoặc xử lý theo nhu cầu của ứng dụng
        console.log(accountInfo);
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Thông tin tài khoản</DialogTitle>
            <DialogContent>
                <TextField
                    label="Tên"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="name"
                    value={accountInfo.name}
                    onChange={handleChange}
                />
                <TextField
                    label="Năm sinh"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="birthYear"
                    value={accountInfo.birthYear}
                    onChange={handleChange}
                />
                <TextField
                    label="Số điện thoại"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="phone"
                    value={accountInfo.phone}
                    onChange={handleChange}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="email"
                    value={accountInfo.email}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Hủy</Button>
                <Button onClick={handleSubmit} variant="contained" color="primary">Lưu</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AccountForm;
