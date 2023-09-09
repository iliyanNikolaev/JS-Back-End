import { useState, useContext } from 'react'

import { UserContext } from '../../../context/userContext';

import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');

  const { login, authData } = useContext(UserContext);

  async function loginHandler() {
    try {
      await login(username);
      navigate('/chat');
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <>
      <h1>Enter your username and private-app-key</h1>
      <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />

      <button onClick={loginHandler}>NEXT</button>

      {authData?.username && <p>Welcome {authData?.username}</p>}
    </>
  )
}
