import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
  users=[];

  constructor(private http: HttpClient) {
  //    this.http.get('https://www.autonise.com/api/course/catalog/').subscribe((result:any) =>{
  //   console.log(result);
  //  })
   }

  ngOnInit() {
  }
  name:any;
  
  password:any;

  loginMe(){
  
    
    

   this.http.post('http://127.0.0.1:8000/ecomapp/login',{email:this.name,password:this.password}).subscribe((res:any)=>{
     
     alert(res.message);
     
   }
   
   )
   
   if (this.name==null ||this.password==null)
     {
       alert("fill in required fields");
     
     }
  
     return true;
  }

}
