import React from 'react';
import styled from '@mui/material/styles/styled';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import EcomFul from '../images/ecommerceFulfillment.svg';
import RetailFul from '../images/retailFulfillment.svg';
import StartUps from '../images/startups.svg';


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

const services = [
    {
        id: 1,
        icon: EcomFul,
        title: 'D2C & Ecommerce Fulfillment',
        description: 'D2C & e-commerce businesses juggle multiple tasks. From building versatile product shelves to guaranteeing timely delivery. Edgistify can make the journey easier for you. We enable swift processes through our warehousing and fulfillment network making your product at lightning-fast speed & in the most cost-effective way.'
    },
    {
        id: 2,
        icon: RetailFul,
        title: 'Enterprise Warehousing Fulfillment',
        description: 'Edgistify can meet enterprise-level storage and Omnichannel fulfillment requirements. Our robust network provides storage solutions in multiple locations empowering you to decrease the time frame of your deliverability. Escalate your market presence with our distinctive Fulfillment services at minimum costs.'
    },
    {
        id: 3,
        icon: StartUps,
        title: 'Start-Up Logistics Support',
        description: 'From managing inventory to fulfilling orders, a start-up has to be tremendously cautious at every step. Edgistify can be a part of your growth journey by making it smooth as silk. Our complete suite of logistics services can help you buckle up for the market.'
    }
];

const ServiceCard = ({ service }) => {
    return (
        <Grid container item xs={12} sx={{ p: { xs: '3.5rem 1rem', md: '3.5rem 0' } }}>
            <Grid item xs={12} md={3} style={{ textAlign: 'center', margin: 'auto' }}>
                <img src={service.icon} style={{ height: '80px', filter: 'invert(100%)', objectFit: 'cover' }} alt={service.title} />
            </Grid>
            <Grid item xs={12} md={9}>
                <Typography variant="h5" sx={{ fontWeight: '500', pb: '1.25rem' }}>{service.title}</Typography>
                <Typography variant="h6" sx={{ fontWeight: '300' }}>{service.description}</Typography>
            </Grid>
        </Grid>
    )
}

const FourthComp = () => {
    return (
        <Box id="Solutions">
            <Container sx={{ height: '100%', p: '4rem 0 0 0' }}>
                <Typography textAlign='center' sx={{ fontWeight: '500', p: { xs: '0 1rem', sm: 0 }, fontSize: { xs: '1.95rem', md: '2.5rem' }, lineHeight: '1.4285' }} variant="h4" >Services</Typography>
                <SectionDivider />
                <Grid container>
                    {
                        services.map(service => <ServiceCard key={service.id} service={service} />)
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default FourthComp