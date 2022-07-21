import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SubjectListPage from './pages/SubjectListPage';
import SubjectDetailsPage from './pages/SubjectDetailsPage';
import SubjectData from "./Data.json";

import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute'; 
import AnonRoute from './components/AnonRoute'; 
import SearchBar from './components/SearchBar';  

function App() {
	return (
		<div className="App">
			<Navbar />
			<SearchBar placeholder="Enter the Subject" data={SubjectData}/>
			<Routes>
				<Route exact path="/" element={
						<PrivateRoute>
							<HomePage />
						</PrivateRoute>
						} />
				<Route
					exact
					path="/subjects"
					element={
						<PrivateRoute>
							<SubjectListPage />
						</PrivateRoute>
					}
				/>

				<Route
					exact
					path="/subjects/:id"
					element={
						<PrivateRoute>
							<SubjectDetailsPage />
						</PrivateRoute>
					}
				/>

				<Route
					exact
					path="/signup"
					element={
						<AnonRoute>
							<SignupPage />
						</AnonRoute>
					}
				/>
				<Route
					exact
					path="/login"
					element={
						<AnonRoute>
							<LoginPage />
						</AnonRoute>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
