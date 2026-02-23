import { Injectable } from '@angular/core';
import { Product } from '../../data/models/product-response.model';

@Injectable({ providedIn: 'root' })
export class ProductLogicService {
  private products: Product[] = [
    {
      id: 'PRD-001',
      name: 'Margherita Pizza',
      description: 'Classic tomato base with mozzarella and fresh basil',
      category: 'Pizza',
      price: 349,
      stockQuantity: 25,
      isVeg: true,
      isActive: true,
      imageUrl: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200',
    },
    {
      id: 'PRD-002',
      name: 'Chicken Burger',
      description: 'Crispy fried chicken with lettuce, tomato and mayo',
      category: 'Burger',
      price: 199,
      stockQuantity: 8,
      isVeg: false,
      isActive: true,
      imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200',
    },
    {
      id: 'PRD-003',
      name: 'Mango Lassi',
      description: 'Chilled mango yoghurt drink with a hint of cardamom',
      category: 'Beverages',
      price: 89,
      stockQuantity: 0,
      isVeg: true,
      isActive: true,
      imageUrl: 'https://images.unsplash.com/photo-1553530666-0d66f3bed780?w=200',
    },
    {
      id: 'PRD-004',
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with a gooey molten centre',
      category: 'Desserts',
      price: 149,
      stockQuantity: 15,
      isVeg: true,
      isActive: true,
      imageUrl: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=200',
    },
    {
      id: 'PRD-005',
      name: 'Loaded Fries',
      description: 'Crispy fries with cheese sauce, jalapeños and sour cream',
      category: 'Sides',
      price: 129,
      stockQuantity: 5,
      isVeg: true,
      isActive: true,
      imageUrl: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200',
    },
    {
      id: 'PRD-006',
      name: 'BBQ Pulled Pork Burger',
      description: 'Slow-cooked pulled pork with BBQ sauce and coleslaw',
      category: 'Burger',
      price: 249,
      stockQuantity: 20,
      isVeg: false,
      isActive: false,
      imageUrl: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=200',
    },
    {
      id: 'PRD-007',
      name: 'Pepperoni Pan Pizza',
      description: 'Thick-crust pan pizza loaded with spicy pepperoni',
      category: 'Pizza',
      price: 429,
      stockQuantity: 3,
      isVeg: false,
      isActive: true,
      imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200',
    },
  ];

  private delay(ms = 500): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async getProducts(): Promise<Product[]> {
    await this.delay();
    return [...this.products];
  }

  async addProduct(product: Omit<Product, 'id'>): Promise<Product[]> {
    await this.delay();
    const newProduct: Product = {
      ...product,
      id: `PRD-${String(Date.now()).slice(-4)}`,
      isActive: true,
    };
    this.products = [...this.products, newProduct];
    return [...this.products];
  }

  async updateStock(id: string, additionalQuantity: number): Promise<Product[]> {
    await this.delay();
    this.products = this.products.map((p) =>
      p.id === id ? { ...p, stockQuantity: p.stockQuantity + additionalQuantity } : p
    );
    return [...this.products];
  }

  async toggleProductStatus(id: string, isActive: boolean): Promise<Product[]> {
    await this.delay();
    this.products = this.products.map((p) => (p.id === id ? { ...p, isActive } : p));
    return [...this.products];
  }
}
