import { Injectable } from '@angular/core';
import { Product } from '../../../product/data/models/product-response.model';

/**
 * Mock storefront data service.
 * Returns the publicly available products (active + varied stock levels).
 */
@Injectable({ providedIn: 'root' })
export class HomeLogicService {

  private readonly products: Product[] = [
    {
      id: 'PRD-1001', name: 'Margherita Pizza', description: 'Classic tomato base with mozzarella, fresh basil, and a drizzle of olive oil.',
      category: 'Pizza', price: 249, stockQuantity: 25, isVeg: true, isActive: true,
      imageUrl: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=480&h=320&fit=crop',
    },
    {
      id: 'PRD-1002', name: 'Chicken Burger', description: 'Crispy fried chicken patty with lettuce, pickles, and signature sauce.',
      category: 'Burger', price: 199, stockQuantity: 18, isVeg: false, isActive: true,
      imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=480&h=320&fit=crop',
    },
    {
      id: 'PRD-1003', name: 'Paneer Tikka Pizza', description: 'Tandoori paneer cubes with bell peppers, onion, and mint mayo.',
      category: 'Pizza', price: 349, stockQuantity: 12, isVeg: true, isActive: true,
      imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=480&h=320&fit=crop',
    },
    {
      id: 'PRD-1004', name: 'Mango Lassi', description: 'Chilled creamy mango yogurt smoothie, sweetened to perfection.',
      category: 'Beverages', price: 99, stockQuantity: 40, isVeg: true, isActive: true,
      imageUrl: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=480&h=320&fit=crop',
    },
    {
      id: 'PRD-1005', name: 'Chocolate Lava Cake', description: 'Warm, gooey chocolate cake with a molten center, served with ice cream.',
      category: 'Desserts', price: 179, stockQuantity: 0, isVeg: true, isActive: true,
      imageUrl: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=480&h=320&fit=crop',
    },
    {
      id: 'PRD-1006', name: 'BBQ Chicken Wings', description: 'Smoky barbecue glazed chicken wings with ranch dip.',
      category: 'Sides', price: 229, stockQuantity: 8, isVeg: false, isActive: true,
      imageUrl: 'https://images.unsplash.com/photo-1608039829572-97814e65fd42?w=480&h=320&fit=crop',
    },
    {
      id: 'PRD-1007', name: 'Cold Coffee', description: 'Iced coffee blended with milk, cream, and a hint of vanilla.',
      category: 'Beverages', price: 129, stockQuantity: 3, isVeg: true, isActive: true,
      imageUrl: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=480&h=320&fit=crop',
    },
    {
      id: 'PRD-1008', name: 'Classic Veg Burger', description: 'Crispy aloo-tikki patty with fresh veggies and tangy mayo.',
      category: 'Burger', price: 149, stockQuantity: 20, isVeg: true, isActive: true,
      imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=480&h=320&fit=crop',
    },
    {
      id: 'PRD-1009', name: 'Garlic Breadsticks', description: 'Warm, buttery garlic breadsticks with marinara dipping sauce.',
      category: 'Sides', price: 119, stockQuantity: 0, isVeg: true, isActive: true,
      imageUrl: 'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=480&h=320&fit=crop',
    },
    {
      id: 'PRD-1010', name: 'Pepperoni Pizza', description: 'Loaded with spicy pepperoni slices, mozzarella, and oregano.',
      category: 'Pizza', price: 329, stockQuantity: 15, isVeg: false, isActive: true,
      imageUrl: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=480&h=320&fit=crop',
    },
  ];

  /** Returns all active storefront products after a simulated delay. */
  getAvailableProducts(): Promise<Product[]> {
    return new Promise((resolve) =>
      setTimeout(() => resolve(this.products.filter((p) => p.isActive)), 500)
    );
  }
}
