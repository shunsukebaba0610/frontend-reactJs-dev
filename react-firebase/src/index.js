import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Line, ImageUploader } from './components';
import { App } from './App';

const Root = ReactDOM.createRoot(document.getElementById('root'));

Root.render(
  <React.StrictMode>
		<Router>
			<Routes>
				<Route exact path='/' element={<App />} />
				<Route exact path='/Line' element={<Line />} />
				<Route exact path='/ImageUploader' element={<ImageUploader />} />
			</Routes>
		</Router>
  </React.StrictMode>
);