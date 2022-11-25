import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';

function App() {
return (
	<Router>
		<Navbar />
		<Routes>
			{/* <Route path='/' exact component={Home} /> */}
			{/* <Route exact path='/'> <Home /> </Route> */}
			{/* <Route path='/about' component={About} /> */}
			{/* <Route path='/about'> <About /> </Route> */}
			{/* <Route path='/events' component={Events} /> */}
			{/* <Route path='/annual' component={AnnualReport} /> */}
			{/* <Route path='/team' component={Teams} /> */}
			{/* <Route path='/blogs' component={Blogs} /> */}
			{/* <Route path='/sign-up' component={SignUp} /> */}
			<Route path='/about' element={<About />} />
			<Route path='/events' element={<Events />} />
			<Route path='/annaul' element={<AnnualReport />} />
			<Route path='/team' element={<Teams />} />
			<Route path='/blogs' element={<Blogs />} />
			<Route path='/sign-up' element={<SignUp />} />
			<Route path='/' element={<Home />} />
		</Routes>
	</Router>
);
}

export default App;

