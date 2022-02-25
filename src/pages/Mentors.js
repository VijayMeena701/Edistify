import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled/macro';

const MentorImgDiv = styled('div')(({ theme, propHeight }) => ({
    position: 'relative',
    cursor: 'pointer',
    width: propHeight,
    height: propHeight,
    margin: '0 auto',
    transition: '0.5s ease-in-out',
    '&:hover': {
        [`${MentorImgAbsDiv}`]: {
            display: 'flex',
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
    padding: '10px',
    color: 'black',
    textAlign: 'center',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    display: 'none',
    transition: '0.3s ease-in-out',
    '&:hover': {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.65)',
        color: 'whitesmoke'
    }
}));


const investors = [
    {
        id: 1,
        icon: 'https://www.edgistify.com/assets/js/new/e6fffc63379e75ba26275031a25725e8.png',
        title: 'Rajesh Ranavat',
        description: 'Executive director, Fund strategic holdings',
        hoverDesc: 'With hands-on experience of more than 30 years in the field of Supply Chain & Logistics, Mr. Rajesh has worked across global markets including US, Asia and Europe.',
        type: 'mentor',
        url: 'https://www.linkedin.com/in/rajesh-ranavat-8561501a/',
    },
    {
        id: 2,
        icon: 'https://www.edgistify.com/assets/js/new/eaf5394e2d07a2737dcd01f5e7939f5a.png',
        title: 'Jitendra Mahajan',
        description: 'Chief supply chain officer, Marico',
        hoverDesc: 'Owning an experience of 25+ years in the supply chain & logistics area, Mr. Jitendra Mahajan has aptitude for international markets.',
        type: 'mentor',
        url: 'https://www.linkedin.com/in/jitendra-mahajan-8a3a4b2',
    },
    {
        id: 3,
        icon: 'https://www.edgistify.com/assets/js/new/dfec0ebe930b9ffe8f3e21845ca9e47f.png',
        title: 'Azeem Zainulbhai',
        description: 'Managing Director, Outsized',
        hoverDesc: 'Being a Managing Director at Outsized,Mr. Azeem contributes to the brand through his business wit and strategic inputs.',
        type: 'mentor',
        url: 'https://www.linkedin.com/in/azeemzainulbhai',
    }
];


const InvestorCard = ({ investor }) => {
    return (
        <Grid container item xs={12} md={4} sx={{ p: { xs: '1.5rem 1rem', md: '3.5rem 0' } }}>
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

const Mentors = () => {
    return (
        <Box>
            <Container sx={{ height: '100%', p: '4rem 0 0 0' }}>
                <Typography textAlign='center' sx={{ fontWeight: '500', p: { xs: '0 1rem', sm: 0 }, lineHeight: '1.4285' }} variant="h3" >Mentors</Typography>
                <img loading="lazy" src='https://www.edgistify.com/assets/js/new/a02481caf556b4d724a86ce0768b95c2.jpg' alt="" style={{ backdropFilter: 'blur(10px)', height: '100%', width: '100%', objectFit: 'contain', filter: 'grayscale(20%) sepia(10%) invert(100%)' }} />
                <Typography variant='h6' sx={{ fontWeight: '200', p: { xs: '0 1rem', sm: 0 }, lineHeight: '1.4285' }}>The most valuable asset to any organization is the group of industry experts that guides through in developing the vision and methodology that perfectly aligns with the market requirements. Our mentors are the driving force behind our organizational ingenuity and proficiency.</Typography>
                <Typography textAlign='center' sx={{ fontWeight: '500', p: { xs: '1rem 1rem 0', sm: '2rem 0 0' }, fontSize: { xs: '1.95rem', md: '2.5rem' }, lineHeight: '1.4285' }} variant="h4" >Our mentors</Typography>
                <Grid container>
                    {
                        investors.map(investor => <InvestorCard key={investor.id} investor={investor} />)
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default Mentors