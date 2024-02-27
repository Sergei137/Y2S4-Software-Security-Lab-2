import React, { useState, useEffect } from 'react';
import './App.css';

function Fact({ token }) {
	const [fact, setFact] = useState('');
	const [loading, setLoading] = useState(true); // Set loading to true by default.

	// Fact will be fetched automatically when component is first mounted.
	useEffect(() => {
		// Get token from props.
		const getFact = async () => {
			const response = await fetch('http://localhost:3333/fact', {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			
			// Parse response as JSON.
			const data = await response.json();
			
			// Get fact from data.
			const fact = data.fact;
			
			// Store fact in state.
			setFact(fact)
			
			// Set loading to false.
			setTimeout(() => {
                setLoading(false);
            }, 2000);
		}

		// Call getFact when component is mounted for the first time.
		getFact();
	}, [token]);

	// If loading is true (fact not loaded), display loading spinner.
	if (loading) {
		return (
			<>
				<div>
					Loading...
				</div>
			</>
		);
	} else {
		return (
			<>
				<h1>Fact</h1>
				<p>{fact}</p>
			</>
		);
	}
}

export default Fact;
