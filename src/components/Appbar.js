import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import ScheduleACall from './ScheduleACall';
import PartnerWithUs from './PartnerWithUs';

const sections = ['Home', 'Solutions', 'Why Us'];


const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="sticky">
            <Container>
                <Toolbar disableGutters style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }} >
                    <ScrollLink activeClass="active" spy={true} smooth={true} offset={-78} duration={300} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }} to="Home">
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                            <Typography
                                variant="h3"
                                noWrap
                                component="div"
                                style={{ fontWeight: '700', padding: '0.5rem 0' }}
                                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                            >
                                Edgistify
                            </Typography>
                        </Link>
                    </ScrollLink>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {sections.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h4"
                        noWrap
                        component="div"
                        style={{ fontWeight: '700', padding: '0.5rem 0' }}
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        Edgistify
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end', gap: '1.5rem', alignItems: 'center' } }}>
                        <ScrollLink activeClass="active" spy={true} smooth={true} offset={-78} duration={300} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }} to="Home">
                            <Link to="/" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block', background: 'none', boxShadow: 'none' }}
                                >
                                    Home
                                </Button>
                            </Link>
                        </ScrollLink>
                        <ScrollLink activeClass="active" spy={true} smooth={true} offset={-78} duration={300} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }} to="Solutions">
                            <Link to="/" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block', background: 'none', boxShadow: 'none' }}
                                >
                                    Solutions
                                </Button>
                            </Link>
                        </ScrollLink>
                        <ScrollLink activeClass="active" spy={true} smooth={true} offset={-78} duration={300} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }} to="Why_us">
                            <Link to="/" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block', background: 'none', boxShadow: 'none' }}
                                >
                                    Why us
                                </Button>
                            </Link>
                        </ScrollLink>
                        <ScheduleACall />
                        <PartnerWithUs />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default ResponsiveAppBar;
