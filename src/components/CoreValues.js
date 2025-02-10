import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Container } from '@mui/material';

const CoreValues = () => {
  const values = [
    {
      title: 'Transparency',
      description: 'Every line of code, every transaction, and every partnership is built on openness.',
      icon: '🔍',
    },
    {
      title: 'Collaboration',
      description: 'From global enterprises to universities, we believe innovation thrives in partnership.',
      icon: '🤝',
    },
    {
      title: 'Education',
      description: 'We’re not just building tools—we’re fostering a community that learns, adapts, and leads.',
      icon: '🎓',
    },
    {
      title: 'Responsibility',
      description: 'Sustainability and ethical tech are non-negotiable in our quest to disrupt industries.',
      icon: '🌍',
    },
  ];

  return (
    <Box id="values" sx={{ py: 8, background: '#000000' }}>
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 4, color: '#00FF00' }}>
          Core Values
        </Typography>
        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ background: '#121212', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', borderRadius: 2, '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.3s ease' } }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ color: '#00FF00' }}>
                    {value.icon} {value.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#FFFFFF' }}>{value.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CoreValues;