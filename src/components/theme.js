import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#00807d',
            light: 'rgb(51,153,151)',
            dark: 'rgb(0,89,87)',
            contrastText: '#fff',
        },
        secondary: {
            main: '#e36868',
            light: 'rgb(232,134,134)',
            dark: 'rgb(158,72,72)',
            contrastText: '#fff',
        },
        error: {
            main: '#f44336',
            light: '#e57373',
            dark: '#d32f2f',
            contrastText: '#fff',
        },
        background: {
            default: '#001219',
            paper: '#001219',
        },
        text: {
            primary: 'rgba(255,255,255,0.87)',
            secondary: 'rgba(255,255,255,0.54)',
            disabled: 'rgba(255,255,255,0.38)',
            hint: 'rgba(255,255,255,0.38)',
        },
    },
    typography: {
        fontFamily: ['"Poppins"', '"Roboto"', '"Helvetica"', '"Arial"', 'sans-serif'].join(',')
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    border: 0,
                    borderRadius: 3,
                    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                    color: 'white',
                    height: 40,
                    padding: '0 30px',
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: '#001219'
                }
            }
        }
    }
});

export default theme;