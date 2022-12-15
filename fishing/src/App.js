import React from 'react';
import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Layout from "./components/Layout";
import Login from "./components/Login";
import EmailTemplate from "./components/EmailTemplate";
import Fishing from "./components/Fishing";
import FishingReport from "./components/FishingReport";
import UserDetails from "./components/UserDetails";
import AddEmployee from "./components/AddEmployee";

class App extends React.Component {
	
	render() {
		
		return (
			<BrowserRouter>
			  <Routes>
				<Route path="/" element={<Layout />}>
				  <Route index element={<Login />} />
				  <Route path="email-templates" element={<EmailTemplate />} />
				  <Route path="fishing" element={<Fishing />} />
				  <Route path="fishing-report" element={<FishingReport />} />
				  <Route path="user-details" element={<UserDetails />} />
				  <Route path="add-employee" element={<AddEmployee />} />
				</Route>
			  </Routes>
			</BrowserRouter>
			
		);
	
	}

}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;


