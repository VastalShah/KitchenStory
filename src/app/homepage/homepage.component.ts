import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  searchBar: any;
  searchResult: any;
  productFound!: boolean;
  p_img: any;
  p_name!: string;
  p_desc!: string;
  p_price!: number;
  @Input() searchMessage!: string;
  showmsg!: boolean;

  ngOnInit(): void {
  }

  handleSearch(){
    this.showmsg = true;
    this.searchBar= document.getElementById("searchBar");
    this.searchResult= document.getElementById("searchResult");
    console.log("Searched Item: " + this.searchBar.value);
    if(this.searchProduct(this.searchBar.value)){
      this.searchResult.style.display = 'block';
      this.searchMessage = "Food Item found";
    } else{
      this.searchMessage = "Sorry Food Item not found";
      this.searchResult.style.display = 'none';
    }
  }

  searchProduct(name: string): boolean{
    for(let i=0; i<localStorage.length; i++){
      var productId: any = localStorage.key(i);
      var prod = localStorage.getItem(productId);
      var product: any = prod?.split("+");
      if(product[1].toLowerCase() == name.toLowerCase()){
        this.p_img = product[0];
        this.p_name = product[1];
        this.p_desc = product[2];
        this.p_price = product[3];
        return true;
      }
    }
    return false;
  }
}
