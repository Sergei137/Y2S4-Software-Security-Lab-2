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
			<button type='submit' onClick={handleLogout} style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'blue', padding: '10px 20px', border: 'none', borderRadius: '10px', cursor: 'pointer'}}>
				LOGOUT
			</button>
		</>
	);
}

export default Logout;
