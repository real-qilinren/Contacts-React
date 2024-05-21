import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Container, Typography, Box } from '@mui/material';
import ContactCard from '../../components/contactCard';

const Contacts = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setContacts(response.data);
                console.log('Contacts fetched from the API:', response.data)
            })
            .catch(error => {
                console.error('There was an error when fetching the contacts from the API!', error);
            });
    }, []);

    return (
        <Container>
            <Typography variant="h4" component="h2" gutterBottom>
                Contacts
            </Typography>
            <Box mt={2}>
                {/*<Grid container spacing={3}>*/}
                {/*    {contacts.map(contact => (*/}
                {/*        <Grid item xs={12} sm={6} md={4} key={contact.id}>*/}
                {/*            <ContactCard contact={contact} />*/}
                {/*        </Grid>*/}
                {/*    ))}*/}
                {/*</Grid>*/}
            </Box>
        </Container>
    );
};

export default Contacts;