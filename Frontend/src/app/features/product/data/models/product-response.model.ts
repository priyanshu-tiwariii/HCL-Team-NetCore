export type ProductCategory = 'Pizza' | 'Burger' | 'Beverages' | 'Desserts' | 'Sides';

export type StockStatus = 'In Stock' | 'Low Stock' | 'Out of Stock';

export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  price: number;
  stockQuantity: number;
  isVeg: boolean;
  isActive: boolean;
  imageUrl: string;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
}
