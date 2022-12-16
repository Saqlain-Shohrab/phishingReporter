import React from 'react';
import './EmailTemplate.css';
import {useRef} from 'react';

const urlManager = require('./URLManager');
const templateCheck = require('./TemplateCheck');

class EmailTemplate extends React.Component {
	
	
	
	constructor(props) {
		super(props);
		
		this.state = {
			items : [],
			DataisLoaded : false,
			companyName : '',
			value : ''
		};
	};
	
	filteredArray(items, cmpName) {
		const filtered = items.filter(item => {
			return item.copanyName.startsWith(cmpName);
		});
		return filtered;
	}
	
	componentDidMount() {
		
		fetch(urlManager.getEmailTemplateURL())
		.then((res) => res.json())
		.then((json) => {
			
			this.setState({
				items : json,
				DataisLoaded : true,
				companyName : '',
				value : ''
			});
		})
	}

	refreshWindow() {
		window.location.reload();
	}
	
	addNewMember() {
		window.open(urlManager.addEmployeePage());
	}
	
	editItem(item) {
		
		localStorage.setItem("pageData", item.id)
		window.open(urlManager.addEmployeePage(), "_blank")
	}


	
	checkWithTemplate() {
		const v = this.state.value;
		const c = templateCheck.checkTemplate(this.state.items, v);
		
		//alert(changedTemp[0].subject);
		
		this.setState({
			items : c,
			DataisLoaded : true,
			companyName : '',
			value : ''
		});
	}
	
	updateInputValue(evt) {
		const val = evt.target.value;
		// ...       
		this.setState({
		  value: val
		});
	}
	
	render() {
		
		const { DataisLoaded, items, companyName, value } = this.state;
		
		if (!DataisLoaded) return <div>
				<h1>Please wait, we are fetching data</h1>
			</div>;
		return (
		
		<div className = "EmailTemplate">
		  
		  <div>
			<h1>Phishing Simulation</h1>
				<form >
					<input className = "EmailTemplate-Input" onChange={evt => this.updateInputValue(evt)} type="text" placeholder="Pleas enter the email body"/>
				</form>
			<button onClick = {() => this.checkWithTemplate()}>Check</button>
		</div>
		  
		  <table>
			<tr>
			  <th>Sl No.</th>
			  <th>Type</th>
			  <th>Name</th>
			  <th>Verification Status</th>
			  <th>Phishing Status</th>
			  <th>Matching score</th>
			</tr>
			{items.map((item, index) => {
			  return (
				<tr key={item.id}>
				  <td>{index + 1}</td>
				  <td>{item.template_type}</td>
				  <td>{item.subject}</td>
				  <td>{item.v_status}</td>
				  <td>{item.s_status}</td>
				  <td>{item.percentage_matching}</td>
				</tr>
			  )
			})}
		  </table>
		</div>
		
		);
	}
	
}

export default EmailTemplate;