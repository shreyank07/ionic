import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', '../homepage/homepage.page.scss'],
})
export class NavbarComponent implements OnInit {
  token: any;
  user: any = [];
  userstatus;
  logged;

  constructor(private service: UserService, private router: Router) {
    this.token = localStorage.getItem('token');
  }

  ngOnInit(): void {
    this.service.getUser().subscribe((data) => {
      this.user = data;
    });
  }

  history() {
    this.userstatus = localStorage.getItem('loginstatus');
    if (this.userstatus == 'true') {
      this.router.navigate(['/history']);
    } else {
      alert('Login Please');
      this.router.navigate(['/page1']);
    }
  }
  isloggedin() {
    if (this.userstatus == 'true') {
      localStorage.removeItem('loginstatus');
      this.logged = 'Login';
    } else {
      this.router.navigate(['/page1']);
    }
  }
}
