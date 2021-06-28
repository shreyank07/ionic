import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartproducts=[];

  constructor(private http:HttpClient) {
    this.http.get('http://127.0.0.1:8000/ecomapp/citem').subscribe((result:any)=>{
      this.cartproducts=result.cart;
    })
   }

  ngOnInit() {
  }

}
