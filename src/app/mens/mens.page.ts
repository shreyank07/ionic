import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.page.html',
  styleUrls: ['./mens.page.scss'],
})
export class MensPage implements OnInit {
  menswear=[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/ecomapp/mens').subscribe((result:any)=>{
      this.menswear=result.product;
    })

  }

}
