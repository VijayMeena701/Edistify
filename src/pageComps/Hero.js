import React from 'react';
import Grid from '@mui/material/Grid';
import BackgroundAnimation from '../components/BackgroundAnimation';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Logo from '../images/edgistify-logo.png';
import Button from '@mui/material/Button';
import styled from '@mui/material/styles/styled';

const Img = styled('img')(({ theme }) => ({
    height: '100%',
    width: '100%',
    objectFit: 'contain',
    [theme.breakpoints.up("md")]: {
        height: '50%',
        width: '50%'
    }
}))

const Hero = () => {
    return (
        <Box style={{ backgroundColor: '#001219' }} sx={{ height: { xs: '90vh', md: '70vh' } }} id="Home" >
            <Container style={{ height: '100%' }}>
                <Grid container style={{ height: '100%' }}>
                    <Grid item xs={12} md={7} style={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', gap: '2.5rem', flexDirection: 'column', marginTop: { xs: '-10rem', sm: 0, md: '10rem' } }}>
                            <Img src={Logo} alt="Logo" />
                            <Typography sx={{ fontSize: { xs: '2rem', md: '3rem' } }} variant='h3' color='white' style={{ background: 'linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: "transparent" }}>
                                Warehousing &amp; Fulfillment Network ensuring Amazon &amp; Flipkart like next day delivery
                            </Typography>
                            <Button style={{ width: '200px', }} variant="contained">Get In Touch</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={0} md={5} style={{ margin: 'auto' }}>
                        <BackgroundAnimation />
                    </Grid>
                </Grid>
            </Container>
        </Box >
    )
}

export default Hero