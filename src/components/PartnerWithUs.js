import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ScheduleACall = () => {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [contactNumber, setContactNumber] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [services, setServices] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const submitRef = React.useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name,
            email,
            contactNumber,
            company,
            services
        }
        console.log(formData);
    }

    return (
        <div>
            <Button sx={{ '&:hover': { border: 'none' } }} variant="outlined" onClick={handleClickOpen}>
                Schedule A Call
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>
                    <Typography
                        variant="h4"
                        noWrap
                        component="div"
                        style={{ fontWeight: '700', padding: '0.5rem 0' }}
                        sx={{ flexGrow: 1 }}
                    >
                        Edgistify
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <Typography
                        variant="h5"
                        noWrap
                        style={{ fontWeight: '700', padding: '0.5rem 0' }}
                        sx={{ flexGrow: 1 }}
                    >
                        Partner with us
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <TextField
                            autoFocus
                            autoComplete='off'
                            required
                            margin="dense"
                            id="name"
                            label="Full name"
                            type="text"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            variant="outlined"
                        />
                        <TextField
                            autoFocus
                            autoComplete='off'
                            required
                            margin="dense"
                            id="number"
                            label="Contact Number"
                            type="tel"
                            pattern="[0-9]{10}"
                            fullWidth
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                            variant="outlined"
                        />
                        <TextField
                            autoFocus
                            autoComplete='off'
                            required
                            margin="dense"
                            id="email"
                            label="Email Id"
                            type="email"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant="outlined"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            autoComplete='off'
                            id="company"
                            label="Company Name"
                            type="text"
                            fullWidth
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            variant="outlined"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            autoComplete='off'
                            id="services"
                            label="Your Services"
                            type="text"
                            value={services}
                            onChange={(e) => setServices(e.target.value)}
                            fullWidth
                            variant="outlined"
                        />
                        {/* <TextField
                                autoFocus
                                margin="dense"
                                autoComplete='off'
                                id="time"
                                label="Contact Time"
                                type="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                fullWidth
                                variant="outlined"
                            /> */}
                        <input ref={submitRef} type='submit' value='Submit' hidden />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => submitRef.current.click()}>Confirm</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default ScheduleACall;