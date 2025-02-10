import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const ContactForm = () => {
  return (
    <Box component="form" sx={{ maxWidth: 600, mx: 'auto', p: 3, background: '#121212', borderRadius: 2, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h5" sx={{ mb: 3, textAlign: 'center', color: '#00FF00' }}>
        Contact Us
      </Typography>
      <TextField fullWidth label="Name" sx={{ mb: 2, background: '#000000', borderRadius: 1, color: '#FFFFFF' }} />
      <TextField fullWidth label="Email" sx={{ mb: 2, background: '#000000', borderRadius: 1, color: '#FFFFFF' }} />
      <TextField fullWidth label="Message" multiline rows={4} sx={{ mb: 2, background: '#000000', borderRadius: 1, color: '#FFFFFF' }} />
      <Button variant="contained" fullWidth sx={{ py: 2, bgcolor: '#00FF00', color: '#000000', '&:hover': { bgcolor: '#006400' } }}>
        Submit
      </Button>
    </Box>
  );
};

export default ContactForm;
