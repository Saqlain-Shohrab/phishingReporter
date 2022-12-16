import React from 'react';
import './UserDetails.css';

const urlManager = require('./URLManager');

class UserDetails extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			items : [],
			DataisLoaded : false,
			companyName : ''
		};
	};
	
	filteredArray(items, cmpName) {
		const filtered = items.filter(item => {
			return item.copanyName.startsWith(cmpName);
		});
		return filtered;
	}
	
	componentDidMount() {
		const cmpNm = localStorage.pageData == null ? '' : localStorage.pageData
		
		fetch(urlManager.employeeDetailsURL())
		.then((res) => res.json())
		.then((json) => {
			//alert(cmpNm)
			const filtered = json.filter( (item) => item.companyName.startsWith(cmpNm))
			this.setState({
				items : filtered,
				DataisLoaded : true,
				companyName : cmpNm
			});
		})
		
		//localStorage.clear();
	}

	refreshWindow() {
		localStorage.clear();
		window.location.reload();
	}
	
	addNewMember() {
		window.open(urlManager.addEmployeePage());
	}
	
	editItem(item) {
		
		localStorage.setItem("pageData", item.id)
		window.open(urlManager.addEmployeePage(), "_blank")
	}
	
	render() {
		const { DataisLoaded, items, companyName } = this.state;
		
		if (!DataisLoaded) return <div>
				<h1>Please wait, we are fetching data</h1>
			</div>;
		return (
		
		<div className="UserDetails">
		<div className = "UserDetailsSubView">
		<h1>User Details</h1>
		  <div className = "Assd">
			<button className = 'UserDetailsButton' onClick = {() => this.refreshWindow()}>Refresh</button>
			<button className = 'UserDetailsButton' onClick = {() => this.addNewMember()}>Add New Employee</button>
		  </div>
		  <table>
			<tr>
			  <th>Sl No.</th>
			  <th>Name</th>
			  <th>Company</th>
			  <th>Contact No</th>
			  <th>Email Address</th>
			  <th>Action</th>
			</tr>
			{items.map((item, index) => {
			  return (
				<tr key={item.id}>
				  <td>{index + 1}</td>
				  <td>{item.name}</td>
				  <td>{item.companyName}</td>
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