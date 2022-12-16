import React from 'react';
//STYLES
import './FishingReport.css';

const urlManager = require('./URLManager');

class FishingReport extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			items : [],
			DataisLoaded : false
		};
	};
	
	columns = [
	  {name: 'Name', uid: 'client'},
	  {name: 'No of Phishing', uid: ''},
	  {name: 'Stauts', uid: 'status'}
	];

	itemClicked(item) {
	
		localStorage.setItem("pageData", item)
		window.open(urlManager.userDetailsPage(), "_blank")

	}	
	
	componentDidMount() {
		
		fetch(urlManager.getPhishingReportURL())
		.then((res) => res.json())
		.then((json) => {
			/*this.setState({
				items : json,
				DataisLoaded1 : true
			});*/
			
			fetch(urlManager.employeeDetailsURL())
			.then((res) => res.json())
			.then((json1) => {
			
			const v = json;
			
			for (let i = 0; i < v.length; i++) {
				v[i].phishing_count = json1.filter( (item) => item.companyName.startsWith(v[i].client)).length
			}
			
			this.setState({
				items : v,
				DataisLoaded : true
			});
		})
			
		})
		
	}

	
	render() {
		const { DataisLoaded, items, users } = this.state;
		if (!DataisLoaded) return <div>
				<h1>Please wait, we are fetching data</h1>
			</div>;
		return (
		
		<div className="FishingReport">
		<h1>Phishing Report</h1>
		  <table>
			<tr>
			<th>Sl No</th>
			  <th>Client Name</th>
			  <th>No of phishing</th>
			  <th>Status</th>
			</tr>
			{items.map((item, index) => {
			  return (
				<tr onClick = {() => this.itemClicked(item.client)} key={index}>
				  <td>{index}</td>
				  <td>{item.client}</td>
				  <td>{item.phishing_count}</td>
				  <td>{(item.phishing_count > 0) ? 'Phished' : 'Secured'}</td>
				</tr>
			  )
			})}
		  </table>
		  
		</div>
		
		);
	}
	
	
}

export default FishingReport;