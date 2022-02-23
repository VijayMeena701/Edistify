import React from 'react';
import styled from '@mui/material/styles/styled';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EdgistifyNetworkGIF from '../images/gifimg.gif';
import Wakefit from '../images/wakefit.png';
import Pureplay from '../images/pureplay.png';
import Marico from '../images/marico.png';
import Caffeine from '../images/mcaffeine.png';
import jio from '../images/jio.png';
import flipkart from '../images/flipkart.png';
import udaan from '../images/udaan.png';
import groffers from '../images/grofers.png';

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

const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
}));

const PartnerCard = styled('div')(({ theme }) => ({
    textAlign: 'center',
    flex: '0 0 100%',
    marginTop: '3rem',
    [theme.breakpoints.up('sm')]: {
        flex: '0 0 50%'
    },
    [theme.breakpoints.up('md')]: {
        flex: '0 0 25%'
    }
}))

const partners = [
    {
        id: 1,
        icon: Pureplay,
        name: 'pureplay',
        alt: 'pureplay',
        height: '40px'
    },
    {
        id: 2,
        icon: Wakefit,
        name: 'wakefit',
        alt: 'wakefit',
        height: '60px'
    },
    {
        id: 3,
        icon: Marico,
        name: 'marico',
        alt: 'marico',
        height: '80px'
    },
    {
        id: 4,
        icon: Caffeine,
        name: 'caffeine',
        alt: 'caffeine',
        height: '60px'
    },
    {
        id: 5,
        icon: jio,
        name: 'jio',
        alt: 'jio',
        height: '80px'
    },
    {
        id: 6,
        icon: flipkart,
        name: 'flipkart',
        alt: 'flipkart',
        height: '60px'
    },
    {
        id: 7,
        icon: udaan,
        name: 'udaan',
        alt: 'udaan',
        height: '50px'
    },
    {
        id: 8,
        icon: groffers,
        name: 'grofers',
        alt: 'grofers',
        height: '60px'
    }
];

const ThirdComp = () => {
    return (
        <Box>
            <Container sx={{ height: '100%', p: '4rem 0 0 0' }}>
                <Typography textAlign='center' sx={{ fontWeight: '500', p: { xs: '0 1rem', sm: 0 }, fontSize: { xs: '1.95rem', md: '2.5rem' }, lineHeight: '1.4285' }} variant="h4" >India’s largest Ecommerce fulfillment platform</Typography>
                <SectionDivider />
                <Typography textAlign='center' sx={{ fontWeight: '300', maxWidth: '900px', margin: 'auto', fontSize: { xs: '1.125rem', md: '1.25rem' }, lineHeight: '1.4285' }} variant="h6" >We aim to make logistics simple, scalable &amp; flexible. Establish an adaptable warehousing network that befits your logistics requirements by connecting with us.</Typography>
                <Box sx={{ maxWidth: '800px', margin: '4rem auto' }}>
                    <img style={{ objectFit: 'contain', height: '100%', width: '100%', filter: 'invert(100%)', backgroundBlendMode: 'multiply' }} src={EdgistifyNetworkGIF} alt="networkGif" />
                </Box>
                <Typography textAlign='center' sx={{ fontWeight: '500', p: { xs: '0 1rem', sm: 0 }, fontSize: { xs: '1.95rem', md: '2.5rem' }, lineHeight: '1.4285' }} variant="h4" >Trusted by more than 200 companies</Typography>
                <SectionDivider />
                <CustomBox>
                    {partners.map(partner =>
                        <PartnerCard key={partner.id}>
                            <img style={{ objectFit: 'contain', height: partner.height, margin: 'auto' }} src={partner.icon} alt={partner.alt} />
                        </PartnerCard>
                    )}
                </CustomBox>
            </Container>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center', gap: '3rem', p: '3rem 0', background: '#ccaacc', mt: '3rem' }}>
                <Typography variant='h4' textAlign='center' sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' }, lineHeight: '1.5' }} >Create <b>on-demand warehousing</b> and <b>fulfillment network</b></Typography>
                <Button>Contact Us</Button>
            </Box>
        </Box>
    )
}

export default ThirdComp