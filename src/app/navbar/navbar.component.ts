import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss','../homepage/homepage.page.scss'],
})
export class NavbarComponent implements OnInit {

  user:any=[]
  userstatus;
  logged;

  constructor(private userinfo: UserService,private router:Router) {
    this.userstatus=localStorage.getItem('loginstatus');
    if (this.userstatus=="true"){
      this.logged="Logout";
    }
    else{
      this.logged="Login";
    }

   }

  ngOnInit():void{
    this.user=this.userinfo.getdata()
    
  }
  history(){
    this.userstatus=localStorage.getItem('loginstatus');
    if (this.userstatus=="true"){
      this.router.navigate(['/history']); 
    }
    else{
      alert('Login Please');
      this.router.navigate(['/page1']); 
    }
    
  }
  isloggedin(){
    if (this.userstatus=='true'){

      localStorage.removeItem('loginstatus');
      this.logged="Login";
    }
    else{
      this.router.navigate(['/page1']);
    }
  }
  
  

}
