import React, { useState } from 'react';
import { AuthenticationContext } from 'components/authentication/Authentication';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    username: 'Falscher Benutzername',
    password: 'Password inkorrekt'
  });

  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
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
                  error={errors.username}
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
                  error={errors.password}
                  required
                  onChange={onPasswordChange}
                />
              </li>
            </ul>
          </div>
          <div className='login_dialogue_footer'>
            <AuthenticationContext.Consumer>
              {
                (value) => (
                  <button
                    type='submit'
                    value='Anmelden'
                    onClick={(event) => {
                      event.preventDefault();
                      value.loginUser({ username, password });
                    }}
                  >LOGIN</button>
                )
              }
            </AuthenticationContext.Consumer>
          </div> 
        </form>
      </div>
    </div>
  );
}

export default Login;