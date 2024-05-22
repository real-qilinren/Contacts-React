import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const ContactCard = ({ contact }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    {contact.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {contact.email}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {contact.phone}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {contact.website}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {contact.address.street}, {contact.address.city}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={`mailto:${contact.email}`}>Email</Button>
                <Button size="small" href={`http://${contact.website}`} target="_blank">Website</Button>
            </CardActions>
        </Card>
    );
};

export default ContactCard;