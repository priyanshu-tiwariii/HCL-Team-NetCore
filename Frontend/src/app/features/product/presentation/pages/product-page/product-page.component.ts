import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { SkeletonModule } from 'primeng/skeleton';
import { TooltipModule } from 'primeng/tooltip';
import { TextareaModule } from 'primeng/textarea';
import { ProductLogicService } from '../../../domain/services/product-logic.service';
import { Product, ProductCategory, StockStatus } from '../../../data/models/product-response.model';
import { ToastService } from '../../../../../core/service/toast.service';

interface CategoryOption {
  label: string;
  value: ProductCategory;
}

interface RestockOption {
  label: string;
  value: number;
}

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
    TagModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputNumberModule,
    SelectModule,
    ToggleSwitchModule,
    SkeletonModule,
    TooltipModule,
    TextareaModule,
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent implements OnInit {
  private readonly logic = inject(ProductLogicService);
  private readonly toast = inject(ToastService);
  private readonly fb = inject(FormBuilder);

  // ── State ────────────────────────────────────────────────────────────────
  products = signal<Product[]>([]);
  loading = signal(true);
  isAddModalOpen = signal(false);
  isSubmitting = signal(false);
  isRestockModalOpen = signal(false);
  restockTarget = signal<Product | null>(null);
  togglingId = signal<string | null>(null);

  // ── Computed ─────────────────────────────────────────────────────────────
  totalProducts = computed(() => this.products().length);
  activeProducts = computed(() => this.products().filter((p) => p.isActive).length);
  outOfStockProducts = computed(
    () => this.products().filter((p) => p.isActive && p.stockQuantity === 0).length
  );

  // ── Options ──────────────────────────────────────────────────────────────
  categories: CategoryOption[] = [
    { label: 'Pizza', value: 'Pizza' },
    { label: 'Burger', value: 'Burger' },
    { label: 'Beverages', value: 'Beverages' },
    { label: 'Desserts', value: 'Desserts' },
    { label: 'Sides', value: 'Sides' },
  ];

  restockOptions: RestockOption[] = [
    { label: '+10 units', value: 10 },
    { label: '+20 units', value: 20 },
    { label: '+50 units', value: 50 },
  ];

  // ── Reactive Form ─────────────────────────────────────────────────────────
  productForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    description: [''],
    category: [null as ProductCategory | null, [Validators.required]],
    price: [null as number | null, [Validators.required, Validators.min(1)]],
    stockQuantity: [0, [Validators.required, Validators.min(0)]],
    isVeg: [false],
  });

  // ── Lifecycle ─────────────────────────────────────────────────────────────
  ngOnInit(): void {
    this.loadProducts();
  }

  private async loadProducts(): Promise<void> {
    this.loading.set(true);
    const data = await this.logic.getProducts();
    this.products.set(data);
    this.loading.set(false);
  }

  // ── Add Product Modal ──────────────────────────────────────────────────────
  openAddModal(): void {
    this.productForm.reset({ isVeg: false, stockQuantity: 0 });
    this.isAddModalOpen.set(true);
  }

  closeAddModal(): void {
    this.productForm.reset({ isVeg: false, stockQuantity: 0 });
    this.isAddModalOpen.set(false);
  }

  async submitAddProduct(): Promise<void> {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }
    this.isSubmitting.set(true);
    const val = this.productForm.getRawValue();
    const updated = await this.logic.addProduct({
      name: val.name!,
      description: val.description ?? '',
      category: val.category!,
      price: val.price!,
      stockQuantity: val.stockQuantity ?? 0,
      isVeg: val.isVeg ?? false,
      isActive: true,
      imageUrl: '',
    });
    this.products.set(updated);
    this.isSubmitting.set(false);
    this.closeAddModal();
    this.toast.success('Product added to menu successfully.');
  }

  // ── Restock Modal ─────────────────────────────────────────────────────────
  openRestockModal(product: Product): void {
    this.restockTarget.set(product);
    this.isRestockModalOpen.set(true);
  }

  closeRestockModal(): void {
    this.restockTarget.set(null);
    this.isRestockModalOpen.set(false);
  }

  async confirmRestock(qty: number): Promise<void> {
    const target = this.restockTarget();
    if (!target) return;
    this.closeRestockModal();
    const updated = await this.logic.updateStock(target.id, qty);
    this.products.set(updated);
    this.toast.success(`Restocked "${target.name}" by +${qty} units.`);
  }

  // ── Toggle Active ─────────────────────────────────────────────────────────
  async onToggleStatus(product: Product, isActive: boolean): Promise<void> {
    this.togglingId.set(product.id);
    const updated = await this.logic.toggleProductStatus(product.id, isActive);
    this.products.set(updated);
    this.togglingId.set(null);
    const msg = isActive ? `"${product.name}" is now active.` : `"${product.name}" has been archived.`;
    this.toast.success(msg);
  }

  // ── Helpers ───────────────────────────────────────────────────────────────
  getStockStatus(product: Product): StockStatus {
    if (!product.isActive) return 'Out of Stock';
    if (product.stockQuantity === 0) return 'Out of Stock';
    if (product.stockQuantity <= 10) return 'Low Stock';
    return 'In Stock';
  }

  getStockSeverity(product: Product): 'success' | 'warn' | 'danger' | 'secondary' {
    if (!product.isActive) return 'secondary';
    if (product.stockQuantity === 0) return 'danger';
    if (product.stockQuantity <= 10) return 'warn';
    return 'success';
  }

  getCategoryColor(category: ProductCategory): string {
    const map: Record<ProductCategory, string> = {
      Pizza: 'bg-orange-50 text-orange-700 border border-orange-200',
      Burger: 'bg-amber-50 text-amber-700 border border-amber-200',
      Beverages: 'bg-blue-50 text-blue-700 border border-blue-200',
      Desserts: 'bg-pink-50 text-pink-700 border border-pink-200',
      Sides: 'bg-green-50 text-green-700 border border-green-200',
    };
    return map[category];
  }

  isFieldInvalid(field: string): boolean {
    const ctrl = this.productForm.get(field);
    return !!(ctrl?.invalid && ctrl?.touched);
  }
}

