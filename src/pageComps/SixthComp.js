import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Pitchright from '../images/pitchrightVentures.png';
import SupplyChain from '../images/supplyChainLabs.png';
import styled from "@emotion/styled/macro";


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

const MentorImgDiv = styled('div')(({ theme, propHeight }) => ({
    position: 'relative',
    cursor: 'pointer',
    width: propHeight,
    height: propHeight,
    margin: '0 auto',
    '&:hover': {
        [`${MentorImgAbsDiv}`]: {
            display: 'flex'
        }
    }
}));

const MentorImg = styled('img')(({ theme }) => ({
    textAlign: 'center',
    height: '300px',
    cursor: 'pointer'
}));

const MentorImgAbsDiv = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.65)',
    padding: '10px',
    textAlign: 'center',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    display: 'none',
}));

const investors = [
    {
        id: 1,
        icon: Pitchright,
        type: 'investor',
        url: 'https://pitchright.ventures/our-portfolio/#1587123873886-a052c56e-fbce9041-2129'
    },
    {
        id: 2,
        icon: SupplyChain,
        type: 'investor',
        url: 'https://supplychainlabs.in/cohort_2020/edgistify/'
    },
    {
        id: 3,
        icon: 'https://prod-edgistify.s3.ap-south-1.amazonaws.com/website/assets/images/rajesh.jpg',
        title: 'Rajesh Ranavat',
        description: 'Executive director, Fund strategic holdings',
        hoverDesc: 'With hands-on experience of more than 30 years in the field of Supply Chain & Logistics, Mr. Rajesh has worked across global markets including US, Asia and Europe.',
        type: 'mentor'
    },
    {
        id: 4,
        icon: 'https://prod-edgistify.s3.ap-south-1.amazonaws.com/website/assets/images/jitendra.jpg',
        title: 'Jitendra Mahajan',
        description: 'Chief supply chain officer, Marico',
        hoverDesc: 'Owning an experience of 25+ years in the supply chain & logistics area, Mr. Jitendra Mahajan has aptitude for international markets.',
        type: 'mentor'
    }
];

const InvestorCard = ({ investor }) => {
    return (
        <Grid container item xs={12} md={6} sx={{ p: { xs: '1.5rem 1rem', md: '3.5rem 0' } }}>
            <Grid item xs={12} style={{ textAlign: 'center', padding: '1rem 0' }}>
                <a href={investor.url} target='_blank' rel='noreferrer noopener' >
                    {investor.type === 'investor' ?
                        <img src={investor.icon} style={{ height: '80px', width: '100%', filter: 'invert(100%)', objectFit: 'contain' }} alt={investor.title} /> :
                        <MentorImgDiv propHeight="300px">
                            <MentorImg src={investor.icon} />
                            <MentorImgAbsDiv>{investor.hoverDesc}</MentorImgAbsDiv>
                        </MentorImgDiv>
                    }
                </a>
            </Grid>
            <Grid item xs={12}>
                <Typography textAlign='center' variant="h6" sx={{ fontWeight: '500', pb: '0.75rem' }}>{investor.title}</Typography>
                <Typography textAlign='center' variant="body2" sx={{ fontWeight: '300', p: { xs: '0 1rem', md: '0 1.25rem' } }}>{investor.description}</Typography>
            </Grid>
        </Grid>
    )
};

const SixthComp = () => {
    return (
        <Box>
            <Container sx={{ height: '100%', p: '4rem 0 0 0' }}>
                <Typography textAlign='center' sx={{ fontWeight: '500', p: { xs: '0 1rem', sm: 0 }, fontSize: { xs: '1.95rem', md: '2.5rem' }, lineHeight: '1.4285' }} variant="h4" >Our institutional investors &amp; mentors</Typography>
                <SectionDivider />
                <Grid container>
                    {
                        investors.map(investor => <InvestorCard key={investor.id} investor={investor} />)
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default SixthComp