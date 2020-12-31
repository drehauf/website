import React from 'react';
import { useShoppingCart } from '../../hooks/shoppingcart.hook';

const MailButton = ({ text, emailText }) => {
  const emailAddresse = 'info@drehauf.com';
  const subject = 'Anfrage für Equipment';
  const emailBody = emailText ?? '';
  const href = `mailto:${emailAddresse}?subject=${subject}&body=${emailBody}`;

  return (
    <a className="button" href={href}>{text}</a>
  );
};

const MailButtonContextConsumer = ({ text }) => {
  const { emailText } = useShoppingCart();
  return <MailButton text={text} emailText={emailText} />;
};

export default MailButtonContextConsumer;
