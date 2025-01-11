import { Item } from './Item';
import { Supplier } from './Supplier';

export interface SupplierOrder {
  id: string;
  supplier: Supplier;
  orderDate: Date;
  deliveryDate?: Date;
  items: SupplierOrderItem[];
  totalAmount: number;
  status: 'Pending' | 'Completed' | 'Cancelled';
  createdAt: Date;
  updatedAt?: Date;
}

export interface SupplierOrderItem {
  item: Item;
  quantity: number;
  price: number;
}
