import React, { useState } from 'react';
import { useAuthContext } from '../authentication/Authentication';
import { Redirect } from "react-router-dom";

const Login = () => {

  const { isAuthenticated, loginUser } = useAuthContext();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  }

  if (isAuthenticated) {
    return <Redirect to='/dashboard'/>;
  }

  return (
    <div className='login'>
      <div className='login_dialogue'>
        <form>
          <div className='login_dialogue_header'>
            <p>Anmeldung notwendig</p>
          </div>
          <div className='login_dialogue_body'>
            <ul>
              <li>
                <label htmlFor='username'>Benutzername</label>
                <input
                  type='text'
                  name='username'
                  id='username'
                  required
                  onChange={onUsernameChange}
                />
              </li>
              <li>
                <label htmlFor='password'>Passwort</label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  required
                  onChange={onPasswordChange}
                />
              </li>
            </ul>
          </div>
          <div className='login_dialogue_footer'>
            <button
              type='submit'
              value='Anmelden'
              onClick={(event) => {
                event.preventDefault();
                loginUser({ username, password }, (error) => {
                  window.alert(Object.values(error));
                });
              }}
            >LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;