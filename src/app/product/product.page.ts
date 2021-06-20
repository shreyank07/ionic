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

side_img = ["http://127.0.0.1:8000/static/subproduct1.jpg", "http://127.0.0.1:8000/static/subproduct2.jpg", "http://127.0.0.1:8000/static/subproduct3.jpg", "http://127.0.0.1:8000/static/subproduct4.jpg"]
main_img : string = this.side_img[0];

change(index){
  this.main_img = this.side_img[index]
}



}
