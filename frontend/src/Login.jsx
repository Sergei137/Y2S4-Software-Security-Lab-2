import React, { useState } from 'react';

function Login({ onLogin }) {

	const [errorMessage, setErrorMessage] = useState(''); // Declare error message state variable

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Get username and password from form
		const username = e.target.username.value;
		const password = e.target.password.value;

		// performLogin is an async function that sends a POST request to /login API endpoint
		const performLogin = async (username, password) => {
			const response = await fetch('http://localhost:3333/login', {
				method: 'post',
				headers: {
					// Required for ExpressJS to parse body
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ username, password })
			});
			
			// Parse response as JSON
			const data = await response.json();
		
			if (response.ok && data.uuid) {
				// Authentication successful
				
				const token = data.uuid;
				
				// Send token to parent App component.
				onLogin(token);
			} else {
				// Authentication failed

				// Display message to user.
				const errorMessage = data.message;
				setErrorMessage(errorMessage);
			}
		}
		
		// Call performLogin with username and password as input.
		await performLogin(username, password);
	}

	return (
		<>
			<h1 style={{textAlign: 'center'}}>Login to view Chuck Norris facts</h1>

			<form onSubmit={handleSubmit}>
				<div style={{ marginBottom: 5, textAlign: 'center' }}>
					<label htmlFor='username' style={{fontSize: 15}}>Username: </label>
					<input id='username' name='username' type='text' style={{border: 2, borderStyle: 'solid', borderRadius: 5, padding: 5}} />
				</div>

				<div style={{ marginBottom: 5, textAlign: 'center' }}>
					<label htmlFor='password' style={{fontSize: 15}}>Password: </label>
					<input id='password' name='password' type='password' style={{border: 2, borderStyle: 'solid', borderRadius: 5, padding: 5}} />
				</div>

				<div style={{ textAlign: 'center' }}>
					<button type='submit' style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'blue', padding: '10px 20px', border: 'none', borderRadius: '10px', cursor: 'pointer'}}>
						LOGIN
					</button>
				</div>
			</form>

			{errorMessage && <div style={{ textAlign: 'center' }}><p>{errorMessage}</p></div>}
		</>
	);
}

export default Login;
