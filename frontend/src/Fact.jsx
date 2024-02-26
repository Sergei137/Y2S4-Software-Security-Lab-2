import React from 'react';

function Fact({ token }) {
	//const [fact, setFact] = React.useState('');

	// See Word document for code example on fetching a fact.

	// Fact will be fetched automatically when component is first mounted.

	// Get token from props.

	const getFact = async () => {
		const response = await fetch('http://localhost:3333/fact', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		const data = await response.json();
		
		const fact = data.fact;
		
		// Store fact in state.
	}

	// Call getFact when component is mounted for the first time.
	getFact();


	return (
		<>
			<h1>Fact</h1>
			{/*<p>{fact}</p>*/}
		</>
	);
}

export default Fact;
