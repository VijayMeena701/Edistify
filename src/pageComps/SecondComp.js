import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Flexible from '../images/flexibility.svg';
import PlatformDriven from '../images/platformDriven.svg';
import StrongNetwork from '../images/strongNetwork.svg';


const Card = ({ data }) => {
    return (
        <Grid container item xs={12} md={5} lg={3} style={{ margin: '0 auto', marginBottom: '3rem' }}>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
                <img style={{ margin: '0 auto', filter: 'invert(100%)' }} src={data.icon} alt="logos" />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6" style={{ fontWeight: '900', textAlign: 'center', margin: '1rem 0' }}>{data.title}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6" textAlign='center'>
                    {data.description}
                </Typography>
            </Grid>
        </Grid>
    )
};

const cardsData = [
    {
        icon: Flexible,
        title: 'Flexible Inventory Storage',
        description: 'We store your inventory closer to your customers using our vast geographical strong reach.'
    },
    {
        icon: StrongNetwork,
        title: 'Omnichannel Inventory Management',
        description: 'Single dashboard to manage & reconcile all your online and offline orders.'
    },
    {
        icon: PlatformDriven,
        title: 'Optimized Quality Service',
        description: 'Ensure 8-16% reduction in cost structure with strictly following industry optimized processes.'
    },
]

const SecondComp = () => {
    return (
        <Box sx={{ p: '4rem 0 0 0' }}>
            <Container style={{ height: '100%' }}>
                <Grid container>
                    {
                        cardsData.map((item, index) => <Card key={index} data={item} />)
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default SecondComp