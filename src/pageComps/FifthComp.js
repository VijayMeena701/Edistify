import React from 'react';
import styled from '@mui/material/styles/styled';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import OperationalEfficiency from '../images/operationalEfficiency.svg';
import Flexibility from '../images/flexibility.svg';
import StrongNetwork from '../images/strongNetwork.svg';
import RetailFull from '../images/retailFulfillment.svg';


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

const different = [
    {
        id: 1,
        icon: OperationalEfficiency,
        title: 'One point solution',
        description: 'We provide a holistic view & control over all orders to bring about simplification across all the touch points.'
    },
    {
        id: 2,
        icon: Flexibility,
        title: 'Flexibility',
        description: 'Our plug and play model helps you to scale your requirements as & when required.'
    },
    {
        id: 3,
        icon: StrongNetwork,
        title: 'Cost Efficiency',
        description: 'Our well-built network of service providers enables us to give you the most pocket-friendly options.'
    },
    {
        id: 4,
        icon: RetailFull,
        title: 'Speedy Fulfillment',
        description: 'We set up your inventory in locations closest to your customer through our wide geographic reach.'
    }
];

const DifferentCard = ({ service }) => {
    return (
        <Grid container item xs={12} sm={6} md={3} sx={{ p: { xs: '1.5rem 1rem', md: '3.5rem 0' } }}>
            <Grid item xs={12} style={{ textAlign: 'center', padding: '1rem 0' }}>
                <img src={service.icon} style={{ height: '60px', filter: 'invert(100%)', objectFit: 'cover' }} alt={service.title} />
            </Grid>
            <Grid item xs={12}>
                <Typography textAlign='center' variant="h5" sx={{ fontWeight: '500', pb: '1.25rem' }}>{service.title}</Typography>
                <Typography textAlign='center' variant="h6" sx={{ fontWeight: '300', p: { xs: '0 1rem', md: '0 1.25rem' } }}>{service.description}</Typography>
            </Grid>
        </Grid>
    )
};

const FifthComp = () => {
    return (
        <Box>
            <Container sx={{ height: '100%', p: '4rem 0 0 0' }}>
                <Typography textAlign='center' sx={{ fontWeight: '500', p: { xs: '0 1rem', sm: 0 }, fontSize: { xs: '1.95rem', md: '2.5rem' }, lineHeight: '1.4285' }} variant="h4" >How are we different</Typography>
                <SectionDivider />
                <Typography textAlign='center' sx={{ fontWeight: '300', p: { xs: '0 1rem', sm: 0 }, mb: { xs: '2rem', md: 0 }, margin: 'auto', fontSize: { xs: '1.125rem', md: '1.2rem' }, lineHeight: '1.4285' }} variant="h6" >Warehousing &amp; Fulfillment requirements call for simplification of process and insights at a glance. Edgistify delivers on both of these promises.</Typography>
                <Grid container>
                    {
                        different.map(service => <DifferentCard key={service.id} service={service} />)
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default FifthComp