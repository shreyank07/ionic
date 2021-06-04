import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  profile:any;
  constructor(private userServ:UserService) { 
    this.profile = userServ.getdata()[0];
  }

  ngOnInit() {
  }

}
