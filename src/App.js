import React from 'react'
import Appbar from './components/Appbar';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from './components/ScrollTop';
import Toolbar from '@mui/material/Toolbar';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
const Mentors = React.lazy(() => import('./pages/Mentors'));
const Team = React.lazy(() => import('./pages/Team'));
const Career = React.lazy(() => import('./pages/Career'));

const Home = () => {
	return (
		<>
			<Hero />
			<SecondComp />
			<ThirdComp />
			<FourthComp />
			<FifthComp />
			<SixthComp />
			<SeventhComp />
			<EighthComp />
		</>
	)
}

const App = (props) => {
	return (
		<ThemeProvider theme={theme}>
			<React.Suspense fallback={<div>Loading...</div>}>
				<Router>
					<CssBaseline />
					<Appbar />
					<Toolbar style={{ width: 0, height: 0, minWidth: 0, minHeight: 0 }} id="back-to-top-anchor" />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path='/mentors' element={<Mentors />} />
						<Route path='/team' element={<Team />} />
						<Route path='/careers' element={<Career />} />
					</Routes>
					<ScrollTop {...props}>
						<Fab color="secondary" size="small" aria-label="scroll back to top">
							<KeyboardArrowUpIcon />
						</Fab>
					</ScrollTop>
					<Footer />
				</Router>
			</React.Suspense>
		</ThemeProvider>
	);
}

export default App;
