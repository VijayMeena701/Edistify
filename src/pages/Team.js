import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export const FounderCard = ({ founder }) => {
    return (
        <Grid item xs={12} sm={6} md={4} style={{ margin: '1em 0' }}>
            <Card sx={{ maxWidth: 345, margin: '0 auto', background: 'rgba(255,255,255,0.05)', padding: '3rem 0 0' }}>
                {/* <CardActionArea> */}
                <CardMedia
                    component="img"
                    height='160'
                    width='160'
                    image={founder.imgUrl}
                    alt={founder.name}
                    sx={{ borderRadius: '50%', margin: '0 auto', width: '160px', height: '160px', objectFit: 'cover' }}
                />
                <CardContent>
                    <Typography textAlign='center' gutterBottom variant="h5" component="div">
                        {founder.name}
                    </Typography>
                    <Typography textAlign='center' gutterBottom variant="h6" sx={{ fontWeight: 300 }} component="div">
                        {founder.role}
                    </Typography>
                    <Typography textAlign='center'>
                        <a href={founder.linkedInUrl} target='_blank' rel='noreferrer noopener' >
                            <svg
                                height='50px'
                                width='50px'
                                className="MuiSvgIcon-root"
                                focusable="false"
                                viewBox="0 0 24 24"
                                fill='rgb(14,118,168)'
                                aria-hidden="true"
                                style={{ fontSize: '40px', matgin: 'auto', color: 'rgb(14, 118, 168)', }}
                            >
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                            </svg>
                        </a>
                    </Typography>
                </CardContent>
                {/* </CardActionArea> */}
            </Card>
        </Grid>
    );
};

const founders = [
    {
        id: 1,
        name: 'Antim Suman',
        imgUrl: 'https://www.edgistify.com/assets/js/new/d81840ecb4679d21490efc4873abce2b.png',
        linkedInUrl: 'https://www.linkedin.com/in/antimsuman'
    },
    {
        id: 2,
        name: 'Kamal Kishore Kumawat',
        imgUrl: 'https://www.edgistify.com/assets/js/new/1e0ec82a81ad7bd1295e8d3ad3ea3cab.png',
        linkedInUrl: 'https://www.linkedin.com/in/kamal4293'
    },
    {
        id: 3,
        name: 'Umang Shukla',
        imgUrl: 'https://www.edgistify.com/assets/js/new/e95a71313a72eb04eadf300fe4339292.png',
        linkedInUrl: 'https://www.linkedin.com/in/umangshuklaiitk'
    }
];
const teamMembers = [
    {
        id: 1,
        name: 'Sanjay Gupta',
        role: 'Sales',
        imgUrl: 'https://www.edgistify.com/assets/js/new/063b0b8c6c5247ed0ecbd56dcb3cc2c3.jpeg',
        linkedInUrl: 'https://www.linkedin.com/in/sanjaygupta40'
    },
    {
        id: 2,
        name: 'Alok Tripathi',
        role: 'Sales',
        imgUrl: 'https://www.edgistify.com/assets/js/new/a7ad8f4eaa64bdf36e6b43d32280d07d.jpeg',
        linkedInUrl: 'https://www.linkedin.com/in/alokb62'
    },
    {
        id: 3,
        name: 'Hardeep Cheema',
        role: 'Growth Strategy',
        imgUrl: 'https://www.edgistify.com/assets/js/new/9b6074c04fef1e72203f8697eb9464ec.jpg',
        linkedInUrl: 'https://www.linkedin.com/in/hardeep-cheema-7896b8182'
    },
    {
        id: 4,
        name: 'Saurabh Kumar',
        role: 'Growth Strategy',
        imgUrl: 'https://www.edgistify.com/assets/js/new/e40b3bcb94c73a7fe0d4dcb49067e724.JPG',
        linkedInUrl: 'https://www.linkedin.com/in/skiitk'
    },
    {
        id: 5,
        name: 'Sahil Agarwal',
        role: 'Growth Strategy',
        imgUrl: 'https://www.edgistify.com/assets/js/new/8a2fd1703b9c7b326697e9dc653deb8a.jpg',
        linkedInUrl: 'https://www.linkedin.com/in/sahil-agrawal'
    },
    {
        id: 6,
        name: 'Prashant Anand',
        role: 'Tech',
        imgUrl: 'https://www.edgistify.com/assets/js/new/858f33956e6795f7de13cc12ef241480.jpg',
        linkedInUrl: 'https://www.linkedin.com/in/panand1992'
    },
    {
        id: 7,
        name: 'Nibedita Gouda',
        role: 'HR',
        imgUrl: 'https://www.edgistify.com/assets/js/new/8aae5c5d20fec3675b069747966d566d.jpg',
        linkedInUrl: 'https://www.linkedin.com/in/nibeditagouda'
    },
    {
        id: 8,
        name: 'Mazhar Khan',
        role: 'Accounts',
        imgUrl: 'https://www.edgistify.com/assets/js/new/ea0cee29f25a39ab0b595e9dfe6d9326.jpeg',
        linkedInUrl: 'https://www.linkedin.com/in/mazhar-khan-42a97858'
    },
    {
        id: 9,
        name: 'Varun Natarajan',
        role: 'Operations',
        imgUrl: 'https://www.edgistify.com/assets/js/new/dcb87d8b47353e0df50f75ef712da604.jpg',
        linkedInUrl: 'https://www.linkedin.com/in/varun-natarajan1994'
    },
    {
        id: 10,
        name: 'Dinesh Kumar',
        role: 'Operations',
        imgUrl: 'https://www.edgistify.com/assets/js/new/153bfde829c4925479c0658b8a766c30.jpg',
        linkedInUrl: 'https://www.linkedin.com/in/dinesh-kumar-1a5452150/'
    },
    {
        id: 11,
        name: 'Rajneesh Goel',
        role: 'Operations',
        imgUrl: 'https://www.edgistify.com/assets/js/new/fbf91a190c8e42fc5ceb61bd266f92b7.jpg',
        linkedInUrl: 'https://www.linkedin.com/in/rajneesh-goel-193806180'
    },
    {
        id: 12,
        name: 'Gautam kumar',
        role: 'City Lead at Edgistify',
        imgUrl: 'https://www.edgistify.com/assets/js/new/edd1f9239727cfff72d5e854437f2966.jpg',
        linkedInUrl: 'https://www.linkedin.com/in/gautam-kumar-58a631198'
    },
    {
        id: 13,
        name: 'Pranav Dixit',
        role: 'Operations',
        imgUrl: 'https://www.edgistify.com/assets/js/new/fc82b6e364051db422c83f24330e01c9.jpg',
        linkedInUrl: 'https://www.linkedin.com/in/pranav-dixit-9478b7151'
    },
    {
        id: 14,
        name: 'Gauri Misal',
        role: 'Digital Marketing',
        imgUrl: 'https://www.edgistify.com/assets/js/new/f1d28dc5285258858688501f9bfe8891.jpeg',
        linkedInUrl: 'https://www.linkedin.com/in/gauri-misal-97638b170/'
    },
    {
        id: 15,
        name: 'Fatema Abid',
        role: 'Digital Marketing',
        imgUrl: 'https://www.edgistify.com/assets/js/new/7a8d9f640c090a5fde8514aa7fb4091c.jpeg',
        linkedInUrl: 'https://www.linkedin.com/in/fatema-abid/'
    },
    {
        id: 16,
        name: 'Hrishikesh Raut',
        role: 'Solution Design',
        imgUrl: 'https://www.edgistify.com/assets/js/new/c66026a569e48b829075fdeb40d3c5c8.jpeg',
        linkedInUrl: 'https://www.linkedin.com/in/hrishikesh-raut-1a89b8197/'
    },
    {
        id: 17,
        name: 'Hema Yadav',
        role: 'Operations',
        imgUrl: 'https://www.edgistify.com/assets/js/new/a9c76e0da8db1ea5865bcc4c7c168a4b.jpg',
        linkedInUrl: 'https://www.linkedin.com/in/hema-yadav/'
    },
    {
        id: 18,
        name: 'Roshni Gupta',
        role: 'HR',
        imgUrl: 'https://www.edgistify.com/assets/js/new/ca332c7894a28c8cc9b30ba9f135741e.jpeg',
        linkedInUrl: 'https://www.linkedin.com/in/roshni-gupta-aa5b4319a/'
    },
    {
        id: 19,
        name: 'Deepti Urhekar',
        role: 'Solution Design',
        imgUrl: 'https://www.edgistify.com/assets/js/new/fad98c864ce78ebd8f1d6deb89971674.jpg',
        linkedInUrl: 'https://www.linkedin.com/in/deeptiu/'
    },
    {
        id: 20,
        name: 'Minti Gauda',
        role: 'Solution Design',
        imgUrl: 'https://www.edgistify.com/assets/js/new/9831c04a7ef255948ead31edf3a4e43e.jpg',
        linkedInUrl: 'https://in.linkedin.com/in/minti-gauda-9539a211a/'
    },
    {
        id: 21,
        name: 'Niraj Jadhav',
        role: 'Solution Design',
        imgUrl: 'https://www.edgistify.com/assets/js/new/afb8e690540e3e4651cd758d7ac20858.jpg',
        linkedInUrl: 'https://in.linkedin.com/in/niraj-jadhav-54542a174/'
    },
];

const Team = () => {
    return (
        <Box>
            <Container sx={{ height: '100%', p: '4rem 0 0 0' }}>
                <Typography textAlign='center' sx={{ fontWeight: '500', p: { xs: '0 1rem', sm: '3rem 0' }, lineHeight: '1.4285' }} variant="h3" >Team</Typography>
                <img loading="lazy" src='https://www.edgistify.com/assets/js/new/748560f69aa3985acad71a321ad57dd0.png' alt="" style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                <Typography textAlign='center' sx={{ fontWeight: '500', p: { xs: '1rem 1rem 0', sm: '4rem 0' }, fontSize: { xs: '1.95rem', md: '2.5rem' }, lineHeight: '1.4285' }} variant="h4" >Our founders</Typography>
                <Grid container>
                    {
                        founders.map(founder => <FounderCard key={founder.id} founder={founder} />)
                    }
                </Grid>
                <Grid container>
                    <Grid item xs={12} sm={6} style={{ width: '100%', height: '100%', maxHeight: '350px', padding: '2rem' }}>
                        <img loading='lazy' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="https://www.edgistify.com/assets/js/new/55b0a8827891fe2d282394ea2dba9696.jpg" alt="our teams" />
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ width: '100%', height: '100%', padding: '2rem' }}>
                        <Typography variant='h6' color='whitesmoke' sx={{ fontWeight: '300' }}>Our teams are quite dynamic as we work cross-functionally to achieve our goals. Every team, no matter how big or small, plays Link crucial role in nurturing &amp; enhancing our solution offerings. At Edgistify, the strength of the team is each individual member, and the strength of each member is the team.</Typography>
                        <Link style={{ textDecoration: 'none' }} to='/career'><Typography textAlign='end' variant='h4' color='cyan'>Join us</Typography></Link>
                    </Grid>
                </Grid>
                <Grid container>
                    {
                        teamMembers.map(member => <FounderCard key={member.id} founder={member} />)
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default Team