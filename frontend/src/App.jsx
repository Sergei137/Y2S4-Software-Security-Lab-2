import React, { useState } from 'react';

import './App.css';
import Login from './Login';
import Fact from './Fact';
import Logout from './Logout';

function App({ onLogin, onLogout }) {
    const [token, setToken] = useState('');

    return (
        <div className="app">
            {/* Display login form if token is not set. */}
            {
                token ? 
                <>
                    <Fact />
                    <Logout onLogout={() => setToken('')} />
                </>
                :
                <Login onLogin={setToken} />
            }

            {/* Display fact and logout if token is set. */}
            {/*<Fact />*/}
        </div>
    );
}

export default App;
