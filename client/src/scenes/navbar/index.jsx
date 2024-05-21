import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, useTheme } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../../state';
import FlexBetween from '../../components/FlexBetween';

const Navbar = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const mode = useSelector((state) => state.mode);

    const alt = theme.palette.background.alt;

    return (
        <AppBar position="static">
            <Toolbar>
                <FlexBetween sx={{ width: '100%', backgroundColor: alt }}>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
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