import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
  users=[];
  todo = {};
  constructor(private http: HttpClient) {
  //    this.http.get('https://www.autonise.com/api/course/catalog/').subscribe((result:any) =>{
  //   console.log(result);
  //  })
   }

  ngOnInit() {
  }
  email:any;
  
  password:any;

  login(form,e){
  
    if(e.keyCode == 13){
      if(!form.invalid){
        console.log(this.todo)
      }
    }

   
  }

}
