import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  products: ProductModel[];
  storageLength: number = localStorage.length;

  constructor(private productService: ProductService) { 
    this.products = [];
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts(4);
  }

}
