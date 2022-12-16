
//This class is used to add and also edit users
//The name of the clas was defined at the very begning, so changing at this moment(30/11/2022) is not a good idea.

import React from 'react';
import './AddEmployee.css';

import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

const urlManager = require('./URLManager');

class AddEmployee extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			items : [],
			DataisLoaded : false,
			employeeID : 0
		};
	};
	
	componentDidMount() {
		
		this.setState({
			items : [],
			DataisLoaded : true,
			employeeID : localStorage.pageData
		});
		
		localStorage.clear();
	}

	addEmployee(employeeID) {
		
		fetch(urlManager.addEmployeeURL(), {
			method : "POST",
			body : JSON.stringify({
				'name': 'NNNWWWWW',
				'email': 'new@g.c',
				'mob': '+nwq',
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
		.then((res) => res.json())
		.then((json) => {
			//alert(json['data'])
			alert('Employee added successfully')
			window.close();
		})
		
		
	}
	
	handleSubmit() {}
	
	render() {
		const { DataisLoaded, items, employeeID } = this.state;
		if (!DataisLoaded) return <div>
				<h1>Please wait, we are fetching data</h1>
			</div>;
		return (
		
		<div className="AddEmployee">
			<h1>Enter Employee Details</h1>
				<form className = "AddEmployee-Input" onSubmit={this.handleSubmit}>
					<input className = "AddEmployee-Input" type="text" placeholder = "Enter Name"/>
					<input className = "AddEmployee-Input" type="text" placeholder = "Enter Mobile No"/>
					<input className = "AddEmployee-Input" type="text" placeholder = "Enter Email"/>
					<input className = "AddEmployee-Input" type="text" placeholder = "Enter Company Name"/>
				</form>
			<button onClick = {() => this.addEmployee(employeeID)}>Add New Employee</button>
		</div>
		
		);
	}
	
}

export default AddEmployee;