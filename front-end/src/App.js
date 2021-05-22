import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';

import NavBar from './components/navbar/navbar';
import Home from './components/home/home';
import Auth from './components/auth/auth';

const App = () => {
	return (
		<BrowserRouter>
			<Container maxidth='lg'>
				<NavBar />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/auth' exact component={Auth} />
				</Switch>
			</Container>
		</BrowserRouter>
	);
};
export default App;
