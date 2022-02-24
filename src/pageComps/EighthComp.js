import React from 'react';
import styled from '@mui/material/styles/styled';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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
    flexWrap: 'wrap',
    padding: '3rem 0'
}));

const FAQCard = styled('div')(({ theme }) => ({
    flex: '0 0 100%',
    borderRight: '1px solid #aeb1be',
    padding: '0 40px',
    [theme.breakpoints.up('sm')]: {
        flex: '0 0 50%'
    },
    [theme.breakpoints.up('md')]: {
        flex: '0 0 33%'
    },
    '&:nth-of-type(3n+1)': {
        borderLeft: '1px solid #aeb1be'
    }
}))

const FAQs = [
    {
        id: 1,
        question: 'What is Ecommerce fulfillment ?',
        answer: 'It refers to the streamlined processes involved in getting the goods ordered online delivered at the customer’s doorstep.'
    },
    {
        id: 2,
        question: 'What are the steps involved in Ecommerce fulfillment ?',
        answer: 'Ecommerce fulfillment involves managing inventory, processing of goods, packing & shipping of the final product & managing returned orders.'
    },
    {
        id: 3,
        question: 'How does Edgistify handle large unexpected orders ?',
        answer: 'Edgistify is exceptional in managing unexpected orders through its plug & play services.'
    },
    {
        id: 4,
        question: 'Why is it important for the businesses to have Ecommerce fulfillment services in place ?',
        answer: 'Speedy delivery offered by e-commerce giants along with the increase in online customers due to the COVID pandemic has increased the importance of e-commerce fulfillment to meet the growing customer demands.'
    },
    {
        id: 5,
        question: 'How can Edgistify help in Ecommerce fulfillment?',
        answer: 'With fulfillment capabilities like high delivery speed, scalable warehouse platform & managing demands from multiple locations, Edgistify is the one-stop solution for all your e-commerce fulfillment requirements.'
    },
    {
        id: 6,
        question: 'How can I get in touch with Edgistify to avail the Ecommerce fulfillment services offered ?',
        answer: 'You can schedule a call with us just by clicking on the “Schedule A Call” option on the top navigation bar of the website.'
    },
    {
        id: 7,
        question: 'Does Edgistify have any tie-ups with third party service providers to ease the shipping processes with reasonable cost ?',
        answer: 'Approximately more than 700+ service providers are associated with us. We have built a network of 52000+ warehouses.'
    },
    {
        id: 8,
        question: 'Will I get real time updates regarding the activities being carried out at the warehouse & the inventory level ?',
        answer: 'Edgistify offers a platform with which our clients can have centralized visibility of the storage space & operations carried out.'
    },
    {
        id: 9,
        question: 'How Edgistify takes care of the customer service? Does it have any processes in place for the same ?',
        answer: 'Edgistify has a widespread warehouse operation network which would help skyrocket the product delivery speed thus ensuring that the products are delivered at the customer’s doorstep well within time.'
    },
    {
        id: 10,
        question: 'In which locations does Edgistify have its fulfillment centres ?',
        answer: 'Edgistify has a warehouse network spread across 150+ locations in India.'
    },
    {
        id: 11,
        question: 'I want to avail warehousing & fulfillment services for a day. Can Edgistify help me with this ?',
        answer: 'Yes, Edgistify does offer Ecommerce fulfillment services for short duration ranging from days to weeks to 1 month.'
    },
    {
        id: 12,
        question: 'I want to avail Ecommerce fulfillment services for a long period of time. Can Edgistify help me with this ?',
        answer: 'Yes, Edgistify does offer Ecommerce fulfillment services for a longer duration as per your business needs, ranging from a minimum of 1 year to a maximum of 10 years.'
    },
    {
        id: 13,
        question: 'What if the inventory level required for my business keeps on fluctuating ?',
        answer: 'Edgistify offers a scalable platform to meet the fluctuating demands of the customers'
    },
    {
        id: 14,
        question: 'What if I urgently need to contact the Ecommerce fulfillment center ?',
        answer: 'Edgistify has a 24/7 dedicated support & resource staff available both online & at the warehouse. Hence, you can get in touch with them in case of any emergency.'
    },
    {
        id: 15,
        question: 'When it comes to compliance management, what all things does Edgistify take care of ?',
        answer: 'In terms of compliance management, Edgistify ensures that legality checks and fire & safety systems are in place as per the business requirements.'
    },
    {
        id: 16,
        question: 'How does Edgistify help its clients connect with the respective vendors selected for warehousing & Ecommerce fulfillment services ?',
        answer: 'Edgistify is a tech based company which understands your requirement and pushes forward the most relevant service providers that are most cost-effective & befits your requirement.'
    },
    {
        id: 17,
        question: 'I need warehouse operations for Ecommerce fulfillment in multiple locations. Can Edgistify help me with this ?',
        answer: 'Yes, Edgistify facilitates warehouse operations through its robust network in more than 150 cities across India.'
    },
    {
        id: 18,
        question: 'What all types of warehouse operations and fulfillment services can Edgistify provide for my Ecommerce fulfillment services ?',
        answer: 'Edgistify covers all the basic operations from inward & outward movement to loading & unloading of goods, inventory management, dashboard, etc.'
    },
    {
        id: 19,
        question: 'Is Edgistify a marketplace ?',
        answer: 'No, we provide warehousing & fulfillment services covering all pain points from storing to delivery.'
    },
];

const EighthComp = () => {
    return (
        <Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center', gap: '3rem', p: '3rem 0', background: '#ccaacc', mt: '3rem' }}>
                <Typography variant='h4' textAlign='center' sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' }, lineHeight: '1.5' }} >Subscribe for <b>news and updates</b></Typography>
                <Button>Contact Us</Button>
            </Box>
            <Container sx={{ height: '100%', p: '4rem 0 0 0' }}>
                <Typography textAlign='center' sx={{ fontWeight: '500', p: { xs: '0 1rem', sm: 0 }, fontSize: { xs: '1.95rem', md: '2.5rem' }, lineHeight: '1.4285' }} variant="h4" >Frequently asked questions</Typography>
                <SectionDivider />
                <CustomBox>
                    {FAQs.map(FAQ =>
                        <FAQCard key={FAQ.id}>
                            <Typography sx={{ mb: '1rem', fontWeight: 400 }} variant='h6'>{FAQ.question}</Typography>
                            <Typography sx={{ mb: '3.5rem', fontWeight: 300 }} variant="body2">{FAQ.answer}</Typography>
                        </FAQCard>
                    )}
                </CustomBox>
            </Container>
        </Box>
    )
}

export default EighthComp