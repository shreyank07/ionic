import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  
  
  passwordBool = false;
  users=[];
  todo = {}
  constructor(private http: HttpClient) { }

  ngOnInit():void{
    // this.user=this.userinfo.getdata()
    
  }

  login(form,e){
    if(e.keyCode == 13){
      if(!form.invalid){
        console.log(this.todo)  
    }
  }
}
  focused(){
    console.log("hello")
  }
  
  change(){
    if (this.passwordBool){
      this.passwordBool = false
    }
    else{
      this.passwordBool = true
    }
  }
  



}



