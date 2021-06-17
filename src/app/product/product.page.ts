import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  users:[];

  constructor(private http:HttpClient) { 
       this.http.get('http://127.0.0.1:8000/ecomapp/insert').subscribe((result:any) =>{
         this.users=result.product;
       console.log(result);
    })
  }

  ngOnInit() {
  }

}
