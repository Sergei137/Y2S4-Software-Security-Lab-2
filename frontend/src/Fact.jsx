import React, { useState, useEffect } from 'react';
import './App.css';
import Spinner from './Spinner';


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
			
			// Set loading to false (artificial loading time).
			setTimeout(() => {
                setLoading(false);
            }, 5000);
		}

		// Call getFact when component is mounted for the first time.
		getFact();
	}, [token]);

	// If loading is true (fact not loaded), display loading message/spinner.
	return (
		<div>
			{loading ? (
				<Spinner />
		  	) : (
				<div>
			  		<h1 style={{textAlign: 'center'}}>Fact</h1>
					<div style={{ textAlign: 'center', fontSize: '20px' }}>
						<p>{fact}</p>
					</div>
				</div>
		  	)}
		</div>
	);
}

export default Fact;

