import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private productService: ProductService, private router: Router) { 
    this.products = [];
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts(4);
  }

  addToCart(id: any){
    var prod: any = localStorage.getItem(id);
    sessionStorage.setItem("cart", prod);
    this.router.navigate(['/cart']);
  }
}
