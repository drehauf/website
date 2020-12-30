import React from 'react';
import Button from '../simple/button.component';

export const AboutItem = (
  <Button
    href="/#about"
    content="ÜBER UNS"
    external={false}
    key="1"
  />
);

export const ServicesItem = (
  <Button
    href="/#services"
    content="LEISTUNGEN"
    external={false}
    key="2"
  />
);

export const CredentialsItem = (
  <Button
    href="/#credentials"
    content="REFERENZEN"
    external={false}
    key="3"
  />
);

export const ContactItem = (
  <Button
    href="/#contact"
    content="KONTAKT"
    external={false}
    key="4"
  />
);

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

export const LogoutItem = (
  <Button
    className="destructive"
    href="/"
    content="ABMELDEN"
    external={false}
    key="5"
  />
);

export const SidebarItem = (
  <Button
    className="destructive"
    href="#"
    content="NAVIGATION"
    external={false}
    key="6"
  />
);
