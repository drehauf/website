import React, { FC as Component, ChangeEvent, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuthentication } from '../authentication/authentication.hook';

const Login: Component = () => {
  const { isAuthenticated, loginUser } = useAuthentication();

  // TODO: use User interface instead
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  /**
   * Username change handler.
   * Set value to `username`
   * @param {ChangeEvent<HTMLInputElement>} event incoming input change event
   */
  const onUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  /**
   * Password change handler.
   * Set value to `password`
   * @param {ChangeEvent<HTMLInputElement>} event incoming input change event
   */
  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="login">
      <div className="login_dialogue">
        <form>
          <div className="login_dialogue_header">
            <p>Anmeldung notwendig</p>
          </div>
          <div className="login_dialogue_body">
            <ul>
              <li>
                <label htmlFor="username">Benutzername</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  required
                  onChange={onUsernameChange}
                />
              </li>
              <li>
                <label htmlFor="password">Passwort</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  onChange={onPasswordChange}
                />
              </li>
            </ul>
          </div>
          <div className="login_dialogue_footer">
            <button
              type="submit"
              value="Anmelden"
              onClick={(event) => {
                event.preventDefault();
                loginUser({ username, password }, (error: Error) => {
                  // eslint-disable-next-line no-alert
                  window.alert(Object.values(error));
                });
              }}
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
