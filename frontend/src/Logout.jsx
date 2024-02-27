import React, {  } from 'react';

function Logout({ onLogout, token }) {
	const handleLogout = async (e) => {
		e.preventDefault();

		try {
			// Send request to /logout API endpoint
			const response = await fetch('http://localhost:3333/logout', {
			  	method: 'POST',
			  	headers: {
					'Content-Type': 'application/json', // Send as JSON
					'Authorization': `Bearer ${token}`, // Send token in header
				},
			});
	  
			if (response.ok) {
				
				// If the request was successful, convert response to JSON
				const data = await response.json();
				
				// Call onLogout with API message as input
				onLogout(data.message);
			} else {
				throw new Error('Logout failed');
			}

		} catch (error) {
			// Log any errors
			console.error(error);
		}
	};

	return (
		<>
			<button onClick={handleLogout}>
				Logout
			</button>
		</>
	);
}

export default Logout;
