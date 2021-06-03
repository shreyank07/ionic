import { Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
 
  user:any=[]
  constructor(private userinfo: UserService) { }

  ngOnInit():void{
    this.user=this.userinfo.getdata()
    
  }
  
  firstname:any;
  email:any;
  password:any;
  number:any;

  loginMe(){
    console.log(this.firstname,this.email);
  }
  }
  
  

 


