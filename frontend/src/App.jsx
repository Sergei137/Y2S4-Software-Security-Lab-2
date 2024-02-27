import React, { useState } from 'react';

import './App.css';
import Login from './Login';
import Fact from './Fact';
import Logout from './Logout';

function App() {
    const [token, setToken] = useState(null);

    const handleLogout = (message) => {
        console.log(message);

        // Clear the token when the user logs out
        setToken(null);
    };

    return (
        <div className="app">
            {/* Display login form if token is not set. */}
            {
                token ? 
                <>
                    {/* Display fact and logout if token is set. */}
                    <Fact token={token}/>
                    <Logout onLogout={handleLogout} token={token} />
                </>
                :
                <Login onLogin={setToken} />
            }
        </div>
    );
}

export default App;
