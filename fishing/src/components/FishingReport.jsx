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
			this.setState({
				items : json,
				DataisLoaded : true
			});
		})
	}

	
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
				<h1>Please wait, we are fetching data</h1>
			</div>;
		return (
		
		<div className="App">
		  <table>
			<tr>
			  <th>Client Name</th>
			  <th>No of phishing</th>
			  <th>Status</th>
			</tr>
			{items.map((item, index) => {
			  return (
				<tr onClick = {() => this.itemClicked(item.client)} key={index}>
				  <td>{item.client}</td>
				  <td>{index}</td>
				  <td>{(item.status === 1) ? 'Phished' : 'Secured'}</td>
				</tr>
			  )
			})}
		  </table>
		  
		</div>
		
		);
	}
	
	
}

export default FishingReport;