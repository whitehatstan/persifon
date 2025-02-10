import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  AppBar,
  Toolbar,
  Link,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Иконка меню из MD3
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import MatrixAnimation from '../components/MatrixAnimation';
import DAGVisualization from '../components/DAGVisualization';
import CoreValues from '../components/CoreValues';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false); // Состояние для выдвигающегося меню

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'About', href: '#about' },
    { text: 'Solutions', href: '#solutions' },
    { text: 'Values', href: '#values' },
    { text: 'Contact', href: '#contact' },
  ];

  return (
    <Box sx={{ background: '#000000', color: '#FFFFFF', minHeight: '100vh' }}>
      {/* Верхний бар */}
      <AppBar position="static" sx={{ background: '#000000', boxShadow: 'none', borderBottom: '1px solid #00FF00' }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, color: '#00FF00', fontWeight: 'bold', fontSize: '2rem' }}>
              Persifon
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
              {menuItems.map((item) => (
                <Link key={item.text} href={item.href} sx={{ color: '#FFFFFF', textDecoration: 'none', '&:hover': { color: '#00FF00' }, fontSize: '1.5rem' }}>
                  {item.text}
                </Link>
              ))}
              <Button variant="contained" sx={{ bgcolor: '#00FF00', color: '#000000', '&:hover': { bgcolor: '#006400' }, fontSize: '1.5rem' }}>
                Login
              </Button>
            </Box>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: 'block', md: 'none' }, color: '#FFFFFF' }} // Белая иконка меню
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Выдвигающееся меню */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250, background: '#000000', height: '100%', color: '#FFFFFF' }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text} component="a" href={item.href}>
                <ListItemText primary={item.text} sx={{ color: '#FFFFFF', fontSize: '1.5rem' }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Анимация фона */}
        <MatrixAnimation />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography variant="h1" sx={{ fontSize: { xs: '3rem', sm: '4.5rem', md: '6rem' }, fontWeight: 'bold', mb: 2, color: '#00FF00' }}>
            Pioneering the Future of Finance and Education
          </Typography>
          <Typography variant="h5" sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, mb: 4, color: '#FFFFFF' }}>
            At Persifon, we’re reimagining the way the world transacts, learns, and connects.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button variant="contained" sx={{ fontSize: '1.5rem', px: 4, py: 2, bgcolor: '#00FF00', color: '#000000', '&:hover': { bgcolor: '#006400' } }}>
              Explore Our Solutions
            </Button>
            <Button variant="outlined" sx={{ fontSize: '1.5rem', px: 4, py: 2, color: '#00FF00', borderColor: '#00FF00', '&:hover': { borderColor: '#006400', color: '#006400' } }}>
              Join the Journey
            </Button>
          </Box>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" sx={{ py: 8, background: '#000000' }}>
        <Container>
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 4, color: '#00FF00', fontSize: '3rem' }}>
            About Persifon
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', mb: 4, color: '#FFFFFF', fontSize: '1.5rem' }}>
            At Persifon, we’re reimagining the way the world transacts, learns, and connects. Born at the intersection of cutting-edge DAG innovation and practical real-world solutions, we’re a dynamic technology company driving two revolutionary missions: redefining global finance and empowering the next generation of students.
          </Typography>
        </Container>
      </Box>

      {/* Solutions Section */}
      <Box id="solutions" sx={{ py: 8, background: '#000000' }}>
        <Container>
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 4, color: '#00FF00', fontSize: '3rem' }}>
            Solutions
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{ border: '2px solid #00FF00', borderRadius: 2, background: 'transparent', height: '55%' }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ color: '#00FF00', fontSize: '2rem' }}>
                    Redefining Global Payments with Next-Gen Blockchain
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#FFFFFF', fontSize: '1.5rem' }}>
                    Traditional payment systems are slow, costly, and fragmented. Persifon is changing that. Our proprietary international payment platform leverages the power of <strong>Directed Acyclic Graph (DAG)</strong> architecture and the <strong>Proof of History (PoH)</strong> protocol to create a lightning-fast, secure, and scalable ecosystem. Unlike conventional blockchains, our DAG-based cryptocurrency eliminates bottlenecks, enabling near-instant transactions with negligible fees—whether you’re sending funds across borders or trading digital assets.
                  </Typography>
                  <DAGVisualization />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ border: '2px solid #00FF00', borderRadius: 2, background: 'transparent', height: '55%' }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ color: '#00FF00', fontSize: '2rem' }}>
                    Empowering Education with Smart Identity Solutions
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#FFFFFF', fontSize: '1.5rem' }}>
                    Innovation isn’t limited to finance. Persifon is proud to collaborate with <strong>Kazan Federal University</strong>, one of Russia’s oldest and most prestigious academic institutions, to develop a next-generation <strong>Student ID System</strong>. This digital identity platform integrates blockchain technology to streamline campus life, offering:
                  </Typography>
                  <ul style={{ color: '#FFFFFF', paddingLeft: '20px', fontSize: '1.5rem' }}>
                    <li>Secure, tamper-proof student credentials.</li>
                    <li>Seamless access to academic records, dormitories, and campus facilities.</li>
                    <li>Integration with payment systems for tuition, meals, and more.</li>
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Vision Section */}
      <Box id="vision" sx={{ py: 8, background: '#000000' }}>
        <Container>
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 4, color: '#00FF00', fontSize: '3rem' }}>
            Our Vision
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', mb: 4, color: '#FFFFFF', fontSize: '1.5rem' }}>
            Persifon exists to bridge the gap between revolutionary technology and everyday needs. Whether it’s enabling a farmer in Kenya to receive cross-border payments in seconds or helping a student in Kazan navigate campus with a tap of their phone, we’re committed to creating solutions that are <strong>inclusive</strong>, <strong>impactful</strong>, and <strong>ahead of their time</strong>.
          </Typography>
        </Container>
      </Box>

      {/* Core Values Section */}
      <CoreValues />

      {/* Join Us Section */}
      <Box id="join" sx={{ py: 8, background: '#000000' }}>
        <Container>
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 4, color: '#00FF00', fontSize: '3rem' }}>
            Join Us on the Journey
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', mb: 4, color: '#FFFFFF', fontSize: '1.5rem' }}>
            Persifon is more than a company. We’re a collective of engineers, dreamers, and problem-solvers dedicated to rewriting the rules. Whether you’re a developer, investor, student, or forward-thinking organization, we invite you to explore how our technology can transform your world.
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', mb: 4, color: '#FFFFFF', fontSize: '1.5rem' }}>
            Welcome to the future. Welcome to Persifon.
          </Typography>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: 8, background: '#000000' }}>
        <Container>
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 4, color: '#00FF00', fontSize: '3rem' }}>
            Contact Us
          </Typography>
          <ContactForm />
        </Container>
      </Box>

      {/* Футер */}
      <Box sx={{ py: 8, background: '#000000', borderTop: '1px solid #00FF00' }}>
        <Container>
          <Typography variant="h6" sx={{ textAlign: 'center', mb: 4, color: '#00FF00', fontSize: '2rem' }}>
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
          <Typography variant="body2" sx={{ textAlign: 'center', mt: 4, color: '#FFFFFF', fontSize: '1.2rem' }}>
            © 2025 Persifon. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;