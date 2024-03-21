import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, InputLabel, DialogActions, Button, Alert } from '@mui/material';

const AccountForm = ({ open, handleClose, saveAccount }) => {
    const [accountInfo, setAccountInfo] = useState({
        username: '',
        password: '',
        birthYear: '',
        phone: '',
        email: ''
    });

    const [showEmptyFieldAlert, setShowEmptyFieldAlert] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccountInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {

        const isEmptyField = Object.values(accountInfo).some(value => value.trim() === '');

        if (isEmptyField) {
            setShowEmptyFieldAlert(true);
            return;
        }

        console.log(accountInfo);
        saveAccount(accountInfo);
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Thêm tài khoản</DialogTitle>
            <DialogContent>
                <TextField
                    label="Tên tài khoản"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="username"
                    value={accountInfo.username}
                    onChange={handleChange}
                />
                <TextField
                    label="Mật khẩu"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="password"
                    value={accountInfo.password}
                    onChange={handleChange}
                />
                <InputLabel htmlFor="birthYear">Năm sinh</InputLabel>
                <TextField
                    id="birthYear"
                    type="date"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="birthYear"
                    value={accountInfo.birthYear}
                    onChange={handleChange}
                />
                <TextField
                    label="Số điện thoại"
                    type="tel"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="phone"
                    value={accountInfo.phone}
                    onChange={handleChange}
                    inputProps={{ inputMode: 'numeric' }}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="email"
                    value={accountInfo.email}
                    onChange={handleChange}
                    error={!accountInfo.email.endsWith('@gmail.com')}
                    helperText={!accountInfo.email.endsWith('@gmail.com') ? "Email phải có đuôi @gmail.com" : ""}
                />
                {showEmptyFieldAlert && (
                    <Alert severity="error" onClose={() => setShowEmptyFieldAlert(false)}>
                        Vui lòng điền đầy đủ thông tin
                    </Alert>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Hủy</Button>
                <Button onClick={handleSubmit} variant="contained" color="primary">Lưu</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AccountForm;