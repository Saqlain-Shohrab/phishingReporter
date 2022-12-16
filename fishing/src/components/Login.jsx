import React from 'react';
import  { useHistory } from 'react-router-dom'
//STYLES
import './Login.css';

const urlManager = require('./URLManager');

class Login extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			items : [],
			DataisLoaded : false
		};
	};
	
	
	executeLogin() {
		//window.redirect(urlManager.homePage(), "_blank")
		//window.location.href = urlManager.homePage();
		alert('Logged In successfully');
		window.close();
		window.open(urlManager.homePage());
		//this.context.router.push("/fishing");
		//let history = useHistory();
		//history.push("/fishing");
	}
	render() {
		
		return (
		
		<div className="login-wrapper">
		  <h1>Please Log In</h1>
		  <form>
			<label>
			  <p>Username</p>
			  <input type="text" />
			</label>
			<label>
			  <p>Password</p>
			  <input type="password" />
			</label>
			<div>
			  <button onClick= {this.executeLogin} type="submit">Submit</button>
			</div>
		  </form>
		</div>
		
		);
	}
	
}

export default Login;