import React, { useContext } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';
import { ProductContext } from './context';

const Screen = () => {
    const data = useContext(ProductContext);
    console.log(data);

    return (
        <div>
            Screen
        </div>
    );
}

export default Screen;
