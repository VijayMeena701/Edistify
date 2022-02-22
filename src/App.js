import React from 'react'
import Appbar from './components/Appbar';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from './components/ScrollTop';
import Toolbar from '@mui/material/Toolbar';
import Hero from './pageComps/Hero';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import SecondComp from './pageComps/SecondComp';
import theme from './components/theme';

const App = (props) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Appbar />
			<Toolbar style={{ width: 0, height: 0, minWidth: 0, minHeight: 0 }} id="back-to-top-anchor" />
			<Hero />
			<SecondComp />
			<div style={{ overflowWrap: 'break-word' }}>
				{
					[...new Array(422)]
						.map((x, index) => <p key={index}>Cras mattis consectetur purus sit amet fermentum.
							Cras justo odio, dapibus ac facilisis in, egestas eget quam.
							Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
							Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
						)
				}
			</div>
			<ScrollTop {...props}>
				<Fab color="secondary" size="small" aria-label="scroll back to top">
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>
		</ThemeProvider>
	);
}

export default App;
