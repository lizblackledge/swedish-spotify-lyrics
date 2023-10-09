import { useEffect, useState } from 'react';
import './App.css';
import Player from './Components/Player';
// import Login from './Components/Login';

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
        .then((result) => result.json())
        .then((data) => setAccessToken(data.access_token));
    } catch (e) {
      console.log('error: ', e);
    }
  }, []);

  return (
    <div className="App">
      <h1>Hejsan!</h1>
      <h3>Today's date: {new Date(Date.now()).toLocaleDateString()}</h3>
      {/* {accessToken === '' ? <Login /> : <Player accessToken={accessToken} />} */}
      <Player accessToken={accessToken}/>
      {accessToken}
      {/* <Login /> */}
    </div>
  );
}

export default App;
