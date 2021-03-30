import { Injectable } from '@angular/core';
import { ProductModel } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): ProductModel[]{
    let products = new Array<ProductModel>();
    for(let i=0; i<4; i++){
      var productId: any = localStorage.key(i);
      var prod = localStorage.getItem(productId);
      var product: any = prod?.split("+");
      products.push(new ProductModel(product[0], product[1], product[2], product[3]))
    }
    return products;
  }
}
