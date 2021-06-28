import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  product;
  price;
  picture;
  color;
  weight;
  dimension;
  warranty;
  _id:string;


  constructor(private http:HttpClient,private activatedroute:ActivatedRoute) { 
      console.log(this.color);
  }

  ngOnInit() {
    this.activatedroute.queryParams.subscribe(params=>{
      this._id=params._id;
      
    })
    this.http.post('http://127.0.0.1:8000/ecomapp/mensproduct',{_id:this._id}).subscribe((res:any)=>{
      this.picture=res.picture;
      this.price=res.price;
      this.color=res.color;
      this.weight=res.weight;
      this.dimension=res.dimension;
      this.warranty=res.warranty;
      this.product=res.product;
    })
    this.http.post('http://127.0.0.1:8000/ecomapp/homeproduct',{_id:this._id}).subscribe((res2:any)=>{
      this.picture=res2.picture;
      this.price=res2.price;
      this.color=res2.color;
      this.weight=res2.weight;
      this.dimension=res2.dimension;
      this.warranty=res2.warranty;
      this.product=res2.product;
    })
    
      }
      addcart(){
        this.http.post('http://127.0.0.1:8000/ecomapp/insertitem',{picture:this.picture,product:this.product,price:this.price,color:this.color}).subscribe((res:any)=>{
          alert(res.message);
        })
      }
    
      

}
