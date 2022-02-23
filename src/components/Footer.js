import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import styled from '@mui/material/styles/styled';
import { Typography } from '@mui/material';

const Wrapper = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
    }
}));

const FooterItemCont = styled('div')(({ theme }) => ({
    flexGrow: 1,
    padding: '0 1rem',
    marginLeft: '120px',
    [theme.breakpoints.down('md')]: {
        flexGrow: 'unset',
        padding: 0,
        flex: '0 0 100%'
    },
    '&:first-child': {
        marginLeft: 0
    }
}))

const Footer = () => {
    return (
        <Box>
            <Container sx={{ p: { xs: '1rem', md: '2.5rem 0rem', borderBottom: '1px solid #fff' } }}>
                <Wrapper>
                    <FooterItemCont>
                        <a href="/" rel="norefferer noopener" style={{ textDecoration: 'none', }} >
                            <Typography variant="h4" color="whitesmoke" >Edgistify</Typography>
                        </a>
                        <Typography sx={{ p: '1rem 0' }} variant='body2' color='whitesmoke' >Edgistify is India's Largest Plug &amp; Play Warehousing &amp; fulfillment Network helping D2C brands, SME's, Legacy Businesses, E-commerce sellers provide Amazon &amp; Flipkart like next day delivery.</Typography>
                    </FooterItemCont>
                    <FooterItemCont>
                        <Typography variant="h5" color="whitesmoke" >Company</Typography>
                        <ul style={{ listStyle: 'none' }}>
                            <li><a style={{ textDecoration: 'none' }} href='/mentors' ><Typography sx={{ '&:hover': { color: '#ffadff' }, m: { xs: '0', sm: '10px 0', md: '0.75rem' } }} variant='body2' color='whitesmoke'>Mentors</Typography></a></li>
                            <li><a style={{ textDecoration: 'none' }} href='/mentors' ><Typography sx={{ '&:hover': { color: '#ffadff' }, m: { xs: '0', sm: '10px 0', md: '0.75rem' } }} variant='body2' color='whitesmoke'>Team</Typography></a></li>
                            <li><a style={{ textDecoration: 'none' }} href='/mentors' ><Typography sx={{ '&:hover': { color: '#ffadff' }, m: { xs: '0', sm: '10px 0', md: '0.75rem' } }} variant='body2' color='whitesmoke'>Careers</Typography></a></li>
                            <li><a style={{ textDecoration: 'none' }} href='/mentors' ><Typography sx={{ '&:hover': { color: '#ffadff' }, m: { xs: '0', sm: '10px 0', md: '0.75rem' } }} variant='body2' color='whitesmoke'>Contact Us</Typography></a></li>
                        </ul>
                    </FooterItemCont>
                    <FooterItemCont>
                        <Typography variant="h5" color="whitesmoke" >Newsroom</Typography>
                        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                            <li><a style={{ textDecoration: 'none' }} href='/newsroom' ><Typography sx={{ '&:hover': { color: '#ffadff' }, m: { xs: '0', sm: '10px 0', md: '0.75rem' } }} variant='body2' color='whitesmoke'>Awards</Typography></a></li>
                            <li><a style={{ textDecoration: 'none' }} href='/newsroom' ><Typography sx={{ '&:hover': { color: '#ffadff' }, m: { xs: '0', sm: '10px 0', md: '0.75rem' } }} variant='body2' color='whitesmoke'>Media and Mentions</Typography></a></li>
                        </ul>
                    </FooterItemCont>
                    <FooterItemCont>
                        <Typography variant="h5" color="whitesmoke" >Newsroom</Typography>
                        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                            <li><a style={{ textDecoration: 'none' }} href='/newsroom' ><Typography sx={{ '&:hover': { color: '#ffadff' }, m: { xs: '0', sm: '10px 0', md: '0.75rem' } }} variant='body2' color='whitesmoke'>Awards</Typography></a></li>
                            <li><a style={{ textDecoration: 'none' }} href='/newsroom' ><Typography sx={{ '&:hover': { color: '#ffadff' }, m: { xs: '0', sm: '10px 0', md: '0.75rem' } }} variant='body2' color='whitesmoke'>Media and Mentions</Typography></a></li>
                        </ul>
                    </FooterItemCont>
                </Wrapper>
            </Container>
        </Box>
    )
}

export default Footer