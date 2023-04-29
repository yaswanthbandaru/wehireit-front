import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
// import Contests from './pages/contests';
import QuizListPage from './pages/QuizListPage';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
// import SignUp from './pages/signup';
import SignInSignUpPage from './pages/SignInSignUpPage';
import Nav from './components/Nav';
import Technology from './pages/technology';

function App() {
return (
	<Router>
		{/* <Navbar /> */}
		<Nav />
		<Routes>
			<Route path='/about' element={<About />} />
			<Route path='/contests' element={<QuizListPage />} />
			<Route path='/annaul' element={<AnnualReport />} />
			<Route path='/team' element={<Teams />} />
			<Route path='/technology' element={<Technology />} />
			<Route path='/blogs' element={<Blogs />} />
			<Route path='/sign-up' element={<SignInSignUpPage />} />
			<Route path='/' element={<Home />} />
			<Route path='/quiz/:id' element={<Blogs />} />
		</Routes>
	</Router>
);
}

export default App;

