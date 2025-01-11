export interface Item {
  id: string;
  name: string;
  description?: string;
  unitPrice: number;
  stockQuantity: number;
  unitOfMeasure: string;
  supplierId: string;
  createdAt: Date;
  updatedAt?: Date;
}
