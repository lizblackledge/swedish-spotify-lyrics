import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const authParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&client_secret=${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`,
    };
    try {
      fetch('https://accounts.spotify.com/api/token', authParams)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))
    } catch(e) {
      console.log('error: ', e)
    }
  });

  return (
    <div className="App">
      <h1>hejsan allihop!</h1>
    </div>
  );
}

export default App;
