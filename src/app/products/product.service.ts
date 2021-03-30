import { Injectable } from '@angular/core';
import { ProductModel } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(range: number): ProductModel[]{
    let products = new Array<ProductModel>();
    for(let i=0; i<range; i++){
      var productId: any = localStorage.key(i);
      var prod = localStorage.getItem(productId);
      var product: any = prod?.split("+");
      products.push(new ProductModel(product[0], product[1], product[2], product[3], product[4]))
    }
    return products;
  }
}
