import React from 'react';
import '../stylesheets/Login.scss';
import '../stylesheets/Container.scss';

class LogIn extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		// console.log(`this is login props ${this.props.addUser}`);
		return (
			<div id='loginInput'>
				<h1>ScrumFlow</h1>
				<div className='loginInfoContainer'>
					<div className='inputStyle'>
						<div className='loginInfo'>Username:</div>
						<div>
							<input className='inputBox' type='text' id='usernameInput' />
						</div>
					</div>
					<div className='inputStyle'>
						<div className='loginInfo'>Password:</div>
						<div>
							<input className='inputBox' type='password' id='passwordInput' />
						</div>
					</div>
				</div>

				<button
					id='passwordButton'
					onClick={() => {
						return this.props.addUser(
							document.getElementById('usernameInput').value,
							document.getElementById('passwordInput').value
						);
					}}
				>
					Sign up
				</button>
				{/* trigger an action to POST input from username and password to backend
      
      */}
				<button
					id='loginButton'
					onClick={() => {
						return this.props.login(
							document.getElementById('usernameInput').value,
							document.getElementById('passwordInput').value
						);
					}}
				>
					Login
				</button>
			</div>
		);
	}
}

export default LogIn;
