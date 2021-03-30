import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  constructor() { }

  p_id: any;
  p_image: any;
  p_name!: string;
  p_desc!: string;
  p_price!: number;

  ngOnInit(): void {
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
    let product: string = this.p_image + "+" + this.p_name + "+" + this.p_desc + "+" + this.p_price;
    if(typeof(Storage) !== "undefined"){
      localStorage.setItem(this.p_id, product);
      alert("Successfully added product");
    } else{
      alert("Your browser does not support web storage");
    }
  }
}
