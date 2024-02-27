import React, { useState } from 'react';

import './App.css';
import Login from './Login';
import Fact from './Fact';
import Logout from './Logout';

function App() {
    const [token, setToken] = useState(null);

    // Clear the token when the user logs out
    const handleLogout = (message) => {
        console.log(message);
        setToken(null);
    };

    return (
        <div className="app">
            {/* Display login form if token is not set. */}
            {
                token ? 
                <>
                    {/* Display fact and logout if token is set. */}
                    <div style={{ position: 'absolute', right: 0, marginRight: '16px' }}>
                        <Logout onLogout={handleLogout} token={token} />
                    </div>
                    <Fact token={token}/>
                </>
                :
                <Login onLogin={setToken} />
            }
        </div>
    );
}

export default App;
