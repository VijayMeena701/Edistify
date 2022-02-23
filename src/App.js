import React from 'react'
import Appbar from './components/Appbar';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from './components/ScrollTop';
import Toolbar from '@mui/material/Toolbar';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from './components/theme';
import Hero from './pageComps/Hero';
const SecondComp = React.lazy(() => import('./pageComps/SecondComp'));
const ThirdComp = React.lazy(() => import('./pageComps/ThirdComp'));
const FourthComp = React.lazy(() => import('./pageComps/FourthComp'));
const FifthComp = React.lazy(() => import('./pageComps/FifthComp'));
const SixthComp = React.lazy(() => import('./pageComps/SixthComp'));
const SeventhComp = React.lazy(() => import('./pageComps/SeventhComp'));
const EighthComp = React.lazy(() => import('./pageComps/EighthComp'));
const Footer = React.lazy(() => import('./components/Footer'));

const App = (props) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Appbar />
			<Toolbar style={{ width: 0, height: 0, minWidth: 0, minHeight: 0 }} id="back-to-top-anchor" />
			<Hero />
			<React.Suspense fallback={<div>Loading...</div>}>
				<SecondComp />
				<ThirdComp />
				<FourthComp />
				<FifthComp />
				<SixthComp />
				<SeventhComp />
				<EighthComp />
				<Footer />
				<ScrollTop {...props}>
					<Fab color="secondary" size="small" aria-label="scroll back to top">
						<KeyboardArrowUpIcon />
					</Fab>
				</ScrollTop>
			</React.Suspense>
		</ThemeProvider>
	);
}

export default App;
