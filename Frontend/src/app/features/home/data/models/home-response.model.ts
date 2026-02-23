import { Product } from '../../../product/data/models/product-response.model';

/** A single item in the shopping cart */
export interface CartItem {
  product: Product;
  quantity: number;
  totalPrice: number;
}

/** Wrapper returned by the storefront data service */
export interface HomeResponse {
  products: Product[];
}
