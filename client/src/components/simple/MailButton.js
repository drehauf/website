import React from 'react';
import { ShoppingCartContext } from 'components/inventory/ShoppingCart';

const MailButton = ({ text, emailText }) => {
  const emailAddresse = 'info@drehauf.com';
  const subject = 'Anfrage für Equipment';
  const emailBody = emailText ?? '';
  const href = "mailto:" + emailAddresse + "?subject=" + subject + "&body=" + emailBody;

  return (
    <a className="button" href={href}>{text}</a>
  )
}

const MailButtonContextConsumer = ({ text }) => {
  return (
    <ShoppingCartContext.Consumer>
      {
        (value) => <MailButton text={text} emailText={value.emailText}/>
      }
    </ShoppingCartContext.Consumer>
  )
}

export default MailButtonContextConsumer;