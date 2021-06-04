import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss','../homepage/homepage.page.scss'],
})
export class NavbarComponent implements OnInit {

  user:any=[]
  constructor(private userinfo: UserService) { }

  ngOnInit():void{
    this.user=this.userinfo.getdata()
    
  }
  
  

}
