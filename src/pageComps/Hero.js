import React from 'react';
import Grid from '@mui/material/Grid';
import BackgroundAnimation from '../components/BackgroundAnimation';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Logo from '../images/edgistify-logo.png';
import Button from '@mui/material/Button';

const Hero = () => {
    return (
        <Box style={{ height: '75vh', backgroundColor: '#001219' }}>
            <Container style={{ height: '100%' }}>
                <Grid container style={{ height: '100%' }}>
                    <Grid container item xs={12} md={7} style={{ display: 'flex', alignItems: 'center' }}>
                        <Grid item xs={12} style={{ display: 'flex', gap: '2.5rem', flexDirection: 'column' }}>
                            <img width="50%" height="50%" src={Logo} alt="Logo" />
                            <Typography sx={{ sm: { p: '0 1rem' } }} variant='h3' color='white' style={{ background: 'linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: "transparent" }}>
                                Warehousing &amp; Fulfillment Network ensuring Amazon &amp; Flipkart like next day delivery
                            </Typography>
                            <Button style={{ width: '200px', }} variant="contained">Get In Touch</Button>
                        </Grid>
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