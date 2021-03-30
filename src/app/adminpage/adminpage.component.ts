import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../products/product.model';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  products: ProductModel[];

  constructor( private productService: ProductService ) {
    this.products = [];
   }

  p_id: any;
  p_image: any;
  p_name!: string;
  p_desc!: string;
  p_price!: number;

  ngOnInit(): void {
    this.products = this.productService.getProducts(localStorage.length);
  }

  handleProductId(event: any){
    this.p_id = event.target.value;
  }

  handleProductImage(event: any){
    this.p_image = event.target.value;
  }

  handleProductName(event: any){
    this.p_name = event.target.value;
  }

  handleProductDescription(event: any){
    this.p_desc = event.target.value;
  }

  handleProductPrice(event: any){
    this.p_price = event.target.value;
  }

  handleProductSubmit(event: any){
    let product: string = this.p_id + "+" + this.p_image + "+" + this.p_name + "+" + this.p_desc + "+" + this.p_price;
    if(typeof(Storage) !== "undefined"){
      localStorage.setItem(this.p_id, product);
      location.reload();
    } else{
      alert("Your browser does not support web storage");
    }
  }

  deleteItem(id: any){
    console.log(id);
    localStorage.removeItem(id);
    location.reload();
  }
}
