import React from 'react';
import './EmailTemplate.css';

class EmailTemplate extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			items : [],
			DataisLoaded : false
		};
	};
	
	componentDidMount() {
		fetch("http://192.168.68.129:5000/api/getStaticReply")
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
		<div className = "EmailTemplate">
			<h1>Fetching data</h1> {
				items.map((item) => (
					<ul key = {item.id} >
						User Name : {item.name}
					</ul>
				))
			}
		</div>
		
		);
	}
	
}

export default EmailTemplate;