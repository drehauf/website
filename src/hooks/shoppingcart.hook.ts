import { createContext, useContext } from 'react';
import InventoryItem from '../models/inventory-item.model';

interface ShoppingCartContext {
  onItemChange: (item: InventoryItem) => void,
  uncheckAll: () => void,
  onPackageChange: (packageItems: InventoryItem[]) => void,
  isCartSet: boolean,
  items: InventoryItem[] | null,
  selected: InventoryItem[],
  emailText: string | undefined,
}

const Context = createContext<ShoppingCartContext>({
  onItemChange: () => {},
  uncheckAll: () => {},
  onPackageChange: () => {},
  isCartSet: false,
  items: null,
  selected: [],
  emailText: '',
});

export default Context;
export const useShoppingCart = () => useContext(Context);
