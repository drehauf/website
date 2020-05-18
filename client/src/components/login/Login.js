import React from 'react';
import Button from 'components/simple/Button';

const Login = () => {
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
                <input type='text' name='username' id='username' required/>
              </li>
              <li>
                <label htmlFor='password'>Passwort</label>
                <input type='password' name='password' id='password' required/>
              </li>
            </ul>
          </div>
          <div className='login_dialogue_footer'>
            <button type='submit' value='Anmelden'>LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;