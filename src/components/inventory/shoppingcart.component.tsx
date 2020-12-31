import React, {
  FC as Component, useState, useRef, PropsWithChildren,
} from 'react';
import ShoppingCartFacade from './ShoppingCartFacade';
import Context from '../../hooks/shoppingcart.hook';
import InventoryItem from '../../models/inventory-item.model';

type Props = PropsWithChildren<any>;

const ShoppingCart: Component<Props> = ({ children }: Props) => {
  const [items, setItems] = useState<InventoryItem[] | null>(null);
  const [isCartSet, setIsCartSet] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<InventoryItem[]>([]);
  const emailText = useRef();

  const onItemChange = (item: InventoryItem) => {
    if (items) {
      setItems(ShoppingCartFacade.updateItems(items, item));
    }
  };

  const removeAllSelectedItems = () => {
    setItems(ShoppingCartFacade.clearItems(items));
  };

  const onPackageChange = (packageItems: InventoryItem[]) => {
    removeAllSelectedItems();
    setItems(ShoppingCartFacade.updatePackage(items, packageItems));
  };

  return (
    <Context.Provider
      value={
        {
          onItemChange,
          uncheckAll: removeAllSelectedItems,
          onPackageChange,
          isCartSet,
          items,
          selected: selectedItems,
          emailText: emailText.current,
        }
      }
    >
      {children}
    </Context.Provider>
  );
};

export default ShoppingCart;
