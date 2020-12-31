import React, { FC as Component } from 'react';
import { useShoppingCart } from '../../hooks/shoppingcart.hook';
import MailButton from '../simple/MailButton';

const actions = {
  SHOW: 'ALLE ANZEIGEN',
  HIDE: 'AUSWAHL ANZEIGEN',
  REMOVE: 'AUSWAHL LÖSCHEN',
  DONE: 'ANFRAGE STELLEN',
};

interface Props {
  show: boolean;
  onClick: () => void;
}

const ActionArea: Component<Props> = ({ show, onClick }: Props) => {
  const { uncheckAll } = useShoppingCart();
  const text: string = show ? actions.SHOW : actions.HIDE;

  return (
    <div className="u-margin-top--large inventory-actions">
      <a className="button" onClick={onClick}>
        {text}
      </a>
      <a className="button destructive" onClick={uncheckAll}>
        {actions.REMOVE}
      </a>
      <MailButton text={actions.DONE} />
    </div>
  );
};

export default ActionArea;
