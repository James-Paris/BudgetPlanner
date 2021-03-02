import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { initialData } from './data/initData';
import ManagerHome from './components/Admin/AdminHome';
import FinanceHome from './components/Financial/FinancialHome';
import NavBar from './components/Navigation/Navbar';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const [projects, setProjects] = useState(
		() => JSON.parse(localStorage.getItem('projects')) || initialData
	);
	useEffect(() => {
		localStorage.setItem('projects', JSON.stringify(projects));
		console.log(projects);
	}, [projects]);

	return (
		<div className='main'>
			<Route path='*' component={NavBar} />
			<Switch>
				<Route
					exact
					path='/'
					render={() => {
						return (
							<ManagerHome projects={projects} setProjects={setProjects} />
						);
					}}
				/>
				<Route
					path='/financial'
					render={() => {
						return (
							<FinanceHome projects={projects} setProjects={setProjects} />
						);
					}}
				/>
			</Switch>
		</div>
	);
}

export default App;
