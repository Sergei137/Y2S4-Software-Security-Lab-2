import React, {  } from 'react';

function Logout({ }) {
	const handleLogout = async (e) => {
		e.preventDefault();

		// Send request to /logout API endpoint
		const response = await fetch('/logout', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
		  });

		// Call onLogout with API message as input.
		//onLogout(data.message);

		// Parent App component needs to notified that logout has occurred.

	};

	//onLogout();

	return (
		<>
			<button onClick={handleLogout}>
				Logout
			</button>
		</>
	);
}

export default Logout;
