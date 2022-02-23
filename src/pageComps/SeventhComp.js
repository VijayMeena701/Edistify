import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import styled from '@mui/material/styles/styled';
import PropTypes from 'prop-types';
import Badge from '@mui/material/Badge';
import RequestCall from '../images/requestCall.svg';
import GetQuote from '../images/getQuote.svg';
import MoveItems from '../images/moveItems.svg'


// const QontoConnector = styled(StepConnector)(({ theme }) => ({
//     [`&.${stepConnectorClasses.alternativeLabel}`]: {
//         top: 10,
//         left: 'calc(-50% + 16px)',
//         right: 'calc(50% + 16px)',
//     },
//     [`&.${stepConnectorClasses.active}`]: {
//         [`& .${stepConnectorClasses.line}`]: {
//             borderColor: '#784af4',
//         },
//     },
//     [`&.${stepConnectorClasses.completed}`]: {
//         [`& .${stepConnectorClasses.line}`]: {
//             borderColor: '#784af4',
//         },
//     },
//     [`& .${stepConnectorClasses.line}`]: {
//         borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
//         borderTopWidth: 3,
//         borderRadius: 1,
//     },
// }));

const steps = [
    {
        label: 'Request a Call',
        description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    },
    {
        label: 'Get a quote',
        description:
            'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
        label: 'Move your items into the warehouse',
        description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    },
];


const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 120,
    height: 120,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    }),
}));

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 185deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 185deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 150,
        width: 6,
        border: 0,
        backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: 1,
        marginLeft: 45
    },
}));



function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <Badge sx={{ '& span': { width: '30px', height: '30px', borderRadius: '50%', fontSize: '1rem' } }} anchorOrigin={{ vertical: 'top', horizontal: 'left' }} badgeContent={1} color="primary" > <img style={{ filter: "invert(75%)", height: '80px', width: '80px' }} src={RequestCall} alt="request Call" /></Badge>,
        2: <Badge sx={{ '& span': { width: '30px', height: '30px', borderRadius: '50%', fontSize: '1rem' } }} anchorOrigin={{ vertical: 'top', horizontal: 'left' }} badgeContent={2} color="primary"><img style={{ filter: "invert(75%)", height: '80px', width: '80px' }} src={GetQuote} alt="get quote" /></Badge>,
        3: <Badge sx={{ '& span': { width: '30px', height: '30px', borderRadius: '50%', fontSize: '1rem' } }} anchorOrigin={{ vertical: 'top', horizontal: 'left' }} badgeContent={3} color="primary"><img style={{ filter: "invert(75%)", height: '80px', width: '80px' }} src={MoveItems} alt="move items" /></Badge>,
    };

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    completed: PropTypes.bool,
    icon: PropTypes.node,
};

export default function VerticalLinearStepper() {
    return (
        <Box sx={{ maxWidth: 700, margin: 'auto' }}>
            <Container>
                <Stepper activeStep={3} connector={<ColorlibConnector />} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel StepIconComponent={ColorlibStepIcon}><Typography variant="h6">{step.label}</Typography></StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Container>
        </Box>
    );
}
