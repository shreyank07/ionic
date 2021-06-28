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

  constructor(private http: HttpClient,private router:Router) {
  //    this.http.get('https://www.autonise.com/api/course/catalog/').subscribe((result:any) =>{
  //   console.log(result);
  //  })
   }

  ngOnInit() {
  }
  email:any;
  
  password:any;

  loginMe(){
  
    
    

   this.http.post('http://127.0.0.1:8000/ecomapp/login',{email:this.email,password:this.password}).subscribe((res:any)=>{
    console.log(res);
    localStorage.setItem('token',res.token);
    localStorage.setItem('myvar','abc');
    localStorage.setItem('loginstatus',res.status);
    this.router.navigate(['/homepage']); 
    alert('Login Successfull');
     
   },(error:any)=>{
     alert('Error occured!');
     console.error(error);
   });
   
   if (this.email==null ||this.password==null)
     {
       alert("fill in required fields");
     
     }
  
     return true;
  }

}
