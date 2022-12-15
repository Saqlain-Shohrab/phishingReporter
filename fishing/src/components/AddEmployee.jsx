import React from 'react';
import './AddEmployee.css';

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
			alert(json['data'])
			window.close();
		})
		
		
	}
	
	render() {
		const { DataisLoaded, items, employeeID } = this.state;
		if (!DataisLoaded) return <div>
				<h1>Please wait, we are fetching data</h1>
			</div>;
		return (
		
		<div className="AddEmployee">
		  <button onClick = {() => this.addEmployee(employeeID)}>Add New Member</button>
		</div>
		
		);
	}
	
}

export default AddEmployee;