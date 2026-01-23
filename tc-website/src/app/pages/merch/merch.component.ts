import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { PRODUCTS } from '../../data/products';

@Component({
  selector: 'app-merch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './merch.component.html',
  styleUrl: './merch.component.css',
})
export class MerchComponent implements OnInit {
  products: Product[] = [];

  ngOnInit() {
    // Ready for actual product data - uncomment and replace when you have real data
    this.products = PRODUCTS;
  }

  formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;
  }
}
