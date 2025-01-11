export interface Supplier {
  id: string;
  name: string;
  contactNumber?: string;
  email?: string;
  address?: string;
  active: boolean;
  createdAt: Date;
  updatedAt?: Date;
}
