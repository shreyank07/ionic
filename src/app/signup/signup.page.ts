import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
 
  users=[];
  constructor(private http: HttpClient) { }

  ngOnInit():void{
    // this.user=this.userinfo.getdata()
    
  }
  
  firstname:any;
  email:any;
  password:any;
  number:any;

  loginMe(){
    // console.log(this.firstname,this.email);
    this.http.post('http://127.0.0.1:8000/ecomapp/insertusers',{name:this.firstname,email:this.email,password:this.password,number:this.number}).subscribe((res:any)=>{
      this.users=res.users;
      console.log(this.users,res.message);
      alert(res.message);
      
    }
    
    )
    
    if (this.firstname==null || this.email==null||this.password==null)
      {
        alert("fill in required fields");
      
      }
   
      return true;
  }
  }
  
  

 


