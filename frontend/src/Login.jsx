import React, { useState} from 'react';

function Login({ onLogin }) {

	const [errorMessage, setErrorMessage] = useState(''); // Declare error message state variable
	// const [loading, setLoading] = useState(false); // Declare loading state variable

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

		await performLogin(username, password);
	}

	return (
		<>
			<h1>Login</h1>

			{/* added code
			{loading ? <></> : null} 
			{loading && <></>}  */}

			<form onSubmit={handleSubmit}>
				<div style={{ marginBottom: 5 }}>
					<label htmlFor='username'>Username: </label>
					<input id='username' name='username' type='text' />
				</div>

				<div style={{ marginBottom: 5 }}>
					<label htmlFor='password'>Password: </label>
					<input id='password' name='password' type='password' />
				</div>

				<button type='submit'>Login</button>
			</form>

			{errorMessage && <p>{errorMessage}</p>}
		</>
	);
}

export default Login;
