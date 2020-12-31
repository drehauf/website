import React, { FC as Component } from 'react';
import { useShoppingCart } from '../../hooks/shoppingcart.hook';

interface Props {
  text: string;
  // eslint-disable-next-line react/no-unused-prop-types
  emailText?: string | null;
}

const defaultProps = {
  emailText: null,
} as Props;

const MailButton: Component<Props> = ({ text, emailText }: Props) => {
  const emailAddresse = 'info@drehauf.com';
  const subject = 'Anfrage für Equipment';
  const emailBody = emailText ?? '';
  const href = `mailto:${emailAddresse}?subject=${subject}&body=${emailBody}`;

  return (
    <a className="button" href={href}>{text}</a>
  );
};

MailButton.defaultProps = defaultProps;

const MailButtonContextConsumer: Component<Props> = ({ text }: Props) => {
  const { emailText } = useShoppingCart();
  return <MailButton text={text} emailText={emailText} />;
};

MailButtonContextConsumer.defaultProps = defaultProps;

export default MailButtonContextConsumer;
