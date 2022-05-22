import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Line from './components/Line';

export const App = () => {
	return ( 
		<>
			<Router>
				<Routes>
					<Route exact path='/' element={<Line />} />
				</Routes>
			</Router>
		</>
	);
}
