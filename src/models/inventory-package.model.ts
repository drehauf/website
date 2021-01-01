import InventoryItem from './inventory-item.model';

interface Package {
  name: string;
  description: string;
  details: string;
  id: number;
  items: InventoryItem[];
}

export default Package;
