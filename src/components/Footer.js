import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import styled from '@mui/material/styles/styled';
import { Typography } from '@mui/material';
import {Link} from 'react-router-dom';

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
        flex: '0 0 100%',
        marginLeft: '0',
    },
    '&:first-of-type': {
        marginLeft: 0
    }
}));
const UnorderedList = styled('ul')(({ theme, flexdiv }) => ({
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: flexdiv ? 'flex' : 'block',
    justifyContent: 'flex-end',
    gap: '2rem',
    [theme.breakpoints.down('md')]: {
        display: 'block',
        padding: flexdiv ? '1rem 0' : '0.125rem 0  1.25rem 1rem'
    }
}))

const Footer = () => {
    return (
        <Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center', gap: '3rem', p: '3rem 0', background: '#ccaacc', mt: '3rem' }}>
                <Container sx={{ color: 'black' }}>
                    <Wrapper>
                        <FooterItemCont>
                            <a href="/" rel="norefferer noopener" style={{ textDecoration: 'none', }} >
                                <Typography variant="h4" color="inherit" >Edgistify</Typography>
                            </a>
                            <Typography sx={{ p: '1rem 0' }} variant='body2' color='inherit' >Edgistify is India's Largest Plug &amp; Play Warehousing &amp; fulfillment Network helping D2C brands, SME's, Legacy Businesses, E-commerce sellers provide Amazon &amp; Flipkart like next day delivery.</Typography>
                        </FooterItemCont>
                        <FooterItemCont>
                            <Typography variant="h6" color="black" sx={{ whiteSpace: 'nowrap' }} >Company</Typography>
                            <UnorderedList>
                                <li><Link style={{ textDecoration: 'none' }} href='/mentors' ><Typography sx={{ '&:hover': { color: '-webkit-link' }, m: { xs: '0', sm: '10px 0', md: '0.75rem 0' }, whiteSpace: 'nowrap' }} variant='body2' color='black'>Mentors</Typography></Link></li>
                                <li><Link style={{ textDecoration: 'none' }} href='/team' ><Typography sx={{ '&:hover': { color: '-webkit-link' }, m: { xs: '0', sm: '10px 0', md: '0.75rem 0' }, whiteSpace: 'nowrap' }} variant='body2' color='black'>Team</Typography></Link></li>
                                <li><Link style={{ textDecoration: 'none' }} href='/careers' ><Typography sx={{ '&:hover': { color: '-webkit-link' }, m: { xs: '0', sm: '10px 0', md: '0.75rem 0' }, whiteSpace: 'nowrap' }} variant='body2' color='black'>Careers</Typography></Link></li>
                                <li><Link style={{ textDecoration: 'none' }} href='/contact' ><Typography sx={{ '&:hover': { color: '-webkit-link' }, m: { xs: '0', sm: '10px 0', md: '0.75rem 0' }, whiteSpace: 'nowrap' }} variant='body2' color='black'>Contact Us</Typography></Link></li>
                            </UnorderedList>
                        </FooterItemCont>
                        <FooterItemCont>
                            <Typography variant="h6" color="black" sx={{ whiteSpace: 'nowrap' }} >Newsroom</Typography>
                            <UnorderedList>
                                <li><a style={{ textDecoration: 'none' }} href='/newsroom' ><Typography sx={{ '&:hover': { color: '-webkit-link' }, m: { xs: '0', sm: '10px 0', md: '0.75rem 0' }, whiteSpace: 'nowrap' }} variant='body2' color='black'>Awards</Typography></a></li>
                                <li><a style={{ textDecoration: 'none' }} href='/newsroom' ><Typography sx={{ '&:hover': { color: '-webkit-link' }, m: { xs: '0', sm: '10px 0', md: '0.75rem 0' }, whiteSpace: 'nowrap' }} variant='body2' color='black'>Media and Mentions</Typography></a></li>
                            </UnorderedList>
                        </FooterItemCont>
                        <FooterItemCont>
                            <Typography variant="h6" color="black" sx={{ whiteSpace: 'nowrap' }} >Social Media</Typography>
                            <UnorderedList>
                                <li><a style={{ textDecoration: 'none' }} href='https://www.facebook.com/edgistify/' target='_blank' rel='noreferrer noopener' ><Typography sx={{ '&:hover': { color: '-webkit-link' }, m: { xs: '0', sm: '10px 0', md: '0.75rem 0' }, whiteSpace: 'nowrap' }} variant='body2' color='black'>Facebook</Typography></a></li>
                                <li><a style={{ textDecoration: 'none' }} href='https://www.linkedin.com/company/edgistify/' target='_blank' rel='noreferrer noopener' ><Typography sx={{ '&:hover': { color: '-webkit-link' }, m: { xs: '0', sm: '10px 0', md: '0.75rem 0' }, whiteSpace: 'nowrap' }} variant='body2' color='black'>Linkedin</Typography></a></li>
                                <li><a style={{ textDecoration: 'none' }} href='https://twitter.com/edgistify' target='_blank' rel='noreferrer noopener' ><Typography sx={{ '&:hover': { color: '-webkit-link' }, m: { xs: '0', sm: '10px 0', md: '0.75rem 0' }, whiteSpace: 'nowrap' }} variant='body2' color='black'>Twitter</Typography></a></li>
                                <li><a style={{ textDecoration: 'none' }} href='https://www.instagram.com/edgistify/' target='_blank' rel='noreferrer noopener' ><Typography sx={{ '&:hover': { color: '-webkit-link' }, m: { xs: '0', sm: '10px 0', md: '0.75rem 0' }, whiteSpace: 'nowrap' }} variant='body2' color='black'>Instagram</Typography></a></li>
                                <li><a style={{ textDecoration: 'none' }} href='https://www.youtube.com/edgistify' target='_blank' rel='noreferrer noopener' ><Typography sx={{ '&:hover': { color: '-webkit-link' }, m: { xs: '0', sm: '10px 0', md: '0.75rem 0' }, whiteSpace: 'nowrap' }} variant='body2' color='black'>Youtube</Typography></a></li>
                            </UnorderedList>
                        </FooterItemCont>
                    </Wrapper>
                </Container>
            </Box >
            <Box style={{ borderTop: '1px solid #fff', }} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center', gap: '3rem', p: '1.5rem 0', background: '#ccaacc' }}>
                <Container>
                    <Wrapper>
                        <FooterItemCont>
                            <Typography variant='body2' color='black'>© 2021 OptiSupply Chain Solution Pvt Ltd | All Rights Reserved</Typography>
                        </FooterItemCont>
                        <FooterItemCont>
                            <UnorderedList flexdiv='something'>
                                <li><a style={{ textDecoration: 'none' }} href='/newsroom' ><Typography sx={{ '&:hover': { color: '-webkit-link' }, m: { xs: '0', sm: '10px 0', md: '0.75rem 0' }, whiteSpace: 'nowrap' }} variant='body2' color='black'>Privacy Policy</Typography></a></li>
                                <li><a style={{ textDecoration: 'none' }} href='/newsroom' ><Typography sx={{ '&:hover': { color: '-webkit-link' }, m: { xs: '0', sm: '10px 0', md: '0.75rem 0' }, whiteSpace: 'nowrap' }} variant='body2' color='black'>Terms &amp; Conditions</Typography></a></li>
                                <li><a style={{ textDecoration: 'none' }} href='/newsroom' ><Typography sx={{ '&:hover': { color: '-webkit-link' }, m: { xs: '0', sm: '10px 0', md: '0.75rem 0' }, whiteSpace: 'nowrap' }} variant='body2' color='black'>Sitemaps</Typography></a></li>
                            </UnorderedList>
                        </FooterItemCont>
                    </Wrapper>
                </Container>
            </Box>
        </Box>
    )
}

export default Footer
