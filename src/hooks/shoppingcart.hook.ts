import { createContext, useContext } from 'react';
import InventoryItem from '../models/inventory-item.model';
import InventoryPage from '../models/inventory-page.model';

interface ShoppingCartContext {
  onItemChange: (item: InventoryItem) => void,
  uncheckAll: () => void,
  onPackageChange: (packageItems: InventoryItem[]) => void,
  isCartSet: boolean,
  items: InventoryPage[],
  selected: InventoryItem[],
  emailText: string | undefined,
}

const Context = createContext<ShoppingCartContext>({
  onItemChange: () => {},
  uncheckAll: () => {},
  onPackageChange: () => {},
  isCartSet: false,
  items: [],
  selected: [],
  emailText: '',
});

export default Context;
export const useShoppingCart = () => useContext(Context);
