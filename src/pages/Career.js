import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import styled from '@mui/material/styles/styled';


const SectionDivider = styled('div')(({ theme }) => ({
    width: '75px',
    height: '4px',
    borderRadius: '10px',
    borderColor: '#fff',
    background: 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)',
    margin: '2rem auto',
    [theme.breakpoints.up('md')]: {
        width: '100px',
        height: '6px',
    }
}));

const Career = () => {
    return (
        <Box>
            <Container sx={{ height: '100%', p: '4rem 0 0 0' }}>
                <Typography textAlign='center' sx={{ fontWeight: '400', p: { xs: '0 1rem', sm: '3rem 0 1rem 0' }, lineHeight: '1.4285' }} variant="h3" >Careers</Typography>
                <Typography textAlign='center' sx={{ fontWeight: '600', p: { xs: '0 1rem', sm: '0.5rem 0 3rem 0' }, lineHeight: '1.4285' }} variant="h3" >Want to join us ?</Typography>
                <SectionDivider />
                <Typography textAlign='center' sx={{ fontWeight: '400', p: { xs: '0 1rem', sm: '3rem 0 1rem 0' }, lineHeight: '1.4285' }} variant="h3" >How we work at Edgistify</Typography>
                <img loading="lazy" src='https://www.edgistify.com/assets/js/new/93acd173f1977d2909feacdb305a15df.png' alt="" style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                <Typography variant='h6' sx={{ fontWeight: '300', p: { xs: '0 1rem', sm: '1rem 0' }, lineHeight: '1.4285' }}>Edgistify is a team of vibrant minds constantly pouring in their efforts to optimize organizational output and simplify the supply chain and logistics processes. Being a startup, we don many hats, juggling multiple roles because we consider ourselves as a team of artists painting a masterpiece together.</Typography>
                <Typography textAlign='center' sx={{ fontWeight: '500', p: { xs: '1rem 1rem 0', sm: '4rem 0' }, fontSize: { xs: '1.95rem', md: '2.5rem' }, lineHeight: '1.4285' }} variant="h4" >What we offer</Typography>
                {/* <Grid container>
                    {
                        founders.map(founder => <FounderCard key={founder.id} founder={founder} />)
                    }
                </Grid> */}
                <Grid container>
                    <Grid item xs={12} sm={6} style={{ width: '100%', height: '100%', maxHeight: '350px', padding: '2rem' }}>
                        <img loading='lazy' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="https://www.edgistify.com/assets/js/new/55b0a8827891fe2d282394ea2dba9696.jpg" alt="our teams" />
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ width: '100%', height: '100%', padding: '2rem' }}>
                        <Typography variant='h6' color='whitesmoke' sx={{ fontWeight: '300' }}>Our teams are quite dynamic as we work cross-functionally to achieve our goals. Every team, no matter how big or small, plays Link crucial role in nurturing &amp; enhancing our solution offerings. At Edgistify, the strength of the team is each individual member, and the strength of each member is the team.</Typography>
                        <Link style={{ textDecoration: 'none' }} to='/career'><Typography textAlign='end' variant='h4' color='cyan'>Join us</Typography></Link>
                    </Grid>
                </Grid>
                {/* <Grid container>
                    {
                        teamMembers.map(member => <FounderCard key={member.id} founder={member} />)
                    }
                </Grid> */}
            </Container>
        </Box>
    )
}

export default Career