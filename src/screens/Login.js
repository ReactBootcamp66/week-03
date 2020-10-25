import React, { useContext, useState } from 'react';

import { PrimaryButton } from '../components/Button';
import Input from '../components/Input/Input';

import SessionContext from '../contexts/SessionContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const { setAuthenticated } = useContext(SessionContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    console.log(username, password);
    if (username === 'admin' && password === 'admin') {
      setAuthenticated(true);
    } else {
      setError('Wrong username or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <Input
        type="text"
        name="username"
        placeholder="Username"
        autoComplete="off"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <PrimaryButton type="submit" text="Login" />
    </form>
  );
};

export default Login;
