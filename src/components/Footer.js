import React from 'react';
import { Box, Typography, Container, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ py: 8, background: '#000000', borderTop: '1px solid #00FF00' }}>
      <Container>
        <Typography variant="h6" sx={{ textAlign: 'center', mb: 4, color: '#00FF00' }}>
          Follow Us
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <IconButton href="https://facebook.com" target="_blank" sx={{ color: '#00FF00' }}>
            <Facebook />
          </IconButton>
          <IconButton href="https://twitter.com" target="_blank" sx={{ color: '#00FF00' }}>
            <Twitter />
          </IconButton>
          <IconButton href="https://instagram.com" target="_blank" sx={{ color: '#00FF00' }}>
            <Instagram />
          </IconButton>
          <IconButton href="https://linkedin.com" target="_blank" sx={{ color: '#00FF00' }}>
            <LinkedIn />
          </IconButton>
        </Box>
        <Typography variant="body2" sx={{ textAlign: 'center', mt: 4, color: '#FFFFFF' }}>
          © 2023 Persifon. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;