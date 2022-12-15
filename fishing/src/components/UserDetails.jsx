import React from 'react';
import './UserDetails.css';

const urlManager = require('./URLManager');

class UserDetails extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			items : [],
			DataisLoaded : false
		};
	};
	
	componentDidMount() {

		fetch(urlManager.employeeDetailsURL())
		.then((res) => res.json())
		.then((json) => {
			this.setState({
				items : json,
				DataisLoaded : true
			});
		})
	}

	refreshWindow() {
		window.location.reload();
	}
	
	editItem(item) {
		//alert('Edit clicked on ' + item.name)
		localStorage.setItem("pageData", item.id)
		window.open(urlManager.addEmployeePage(), "_blank")
	}
	
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
				<h1>Please wait, we are fetching data</h1>
			</div>;
		return (
		
		<div className="UserDetails">
		<div className = "UserDetailsSubView">
		  <button className = 'UserDetailsButton' onClick = {() => this.refreshWindow()}>Refresh</button>
		  <table>
			<tr>
			  <th>Name</th>
			  <th>Contact No</th>
			  <th>Email Address</th>
			  <th>Action</th>
			</tr>
			{items.map((item) => {
			  return (
				<tr key={item.id}>
				  <td>{item.name}</td>
				  <td>{item.mob}</td>
				  <td>{item.email}</td>
				  <td onClick = {() => this.editItem(item)}>Edit</td>
				</tr>
			  )
			})}
		  </table>
		  </div>
		</div>
		
		);
	}
	
}

export default UserDetails;