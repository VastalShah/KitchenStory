import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  p_img: any;
  p_name!: string;
  p_desc!: string;
  p_price!: number;

  constructor() { }

  ngOnInit(): void {
    var prod = sessionStorage.getItem("cart");
    var product: any = prod?.split("+");
    this.p_img = product[1];
    this.p_name = product[2];
    this.p_desc = product[3];
    this.p_price = product[4];
    console.log(product);
    console.log(this.p_name);
  }

}
