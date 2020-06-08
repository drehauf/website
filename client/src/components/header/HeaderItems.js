import React from 'react';
import Button from 'components/simple/Button';
import { AuthenticationContext } from 'components/authentication/Authentication';

export const AboutItem = <Button
  href='/#about'
  text='ÜBER UNS'
  external={false}
  key='1'
/>;

export const ServicesItem = <Button
  href='/#services'
  text='LEISTUNGEN'
  external={false}
  key='2'
/>;

export const CredentialsItem = <Button
  href='/#credentials'
  text='REFERENZEN'
  external={false}
  key='3'
/>;

export const ContactItem = <Button
  href='/#contact'
  text='KONTAKT'
  external={false}
  key='4'
/>;

// export const LogoutItem = 
// <ManagerContext.Consumer>
// {
//   (value) => (
//     <Button
//       className='destructive'
//       href='/'
//       text='LOG OUT'
//       external={false}
//       key='5'
//       onClick={value.onLogout}
//     />
//   )
// }
// </ManagerContext.Consumer>;

export const LogoutItem = <Button
  className='destructive'
  href='/'
  text='ABMELDEN'
  external={false}
  key='5'
/>;

export const SidebarItem = <Button
  className='destructive'
  href='#'
  text='NAVIGATION'
  external={false}
  key='6'
/>;