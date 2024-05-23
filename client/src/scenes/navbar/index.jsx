import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../../state';
import FlexBetween from '../../components/FlexBetween';

const Navbar = () => {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.mode);

    return (
        <AppBar position="static">
            <Toolbar>
                <FlexBetween sx={{ width: '100%' }}>
                    <Typography fontWeight="bold" variant="h2" sx={{ flexGrow: 1 }}>
                        Contacts-React
                    </Typography>
                    <IconButton onClick={() => dispatch(setMode())} color="inherit">
                        {mode === 'dark' ? <LightMode /> : <DarkMode />}
                    </IconButton>
                </FlexBetween>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;