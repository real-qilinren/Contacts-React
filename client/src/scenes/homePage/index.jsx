import React from 'react';
import Navbar from '../navbar/index';
import { Box } from '@mui/material';
import Contacts from "./contacts";

const HomePage = () => {
    return (
        <Box>
            <Navbar />
            <Box mt={2}>
                <Contacts />
            </Box>
        </Box>
    );
};

export default HomePage;