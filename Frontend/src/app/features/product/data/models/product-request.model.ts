import { ProductCategory } from './product-response.model';

export interface ProductRequest {
  name: string;
  description: string;
  category: ProductCategory;
  price: number;
  stockQuantity: number;
  isVeg: boolean;
  imageUrl: string;
}
