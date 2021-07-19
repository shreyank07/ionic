import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.page.html',
  styleUrls: ['./women.page.scss'],
})
export class WomenPage implements OnInit {
  personName = 'Vanshil';
  wValue: string;
  products = [1, 2, 3, 4, 5, 6, 7, 8];
  group  = 'women';

  constructor(
    private service: UserService,
    private ActiveRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.ActiveRoute.queryParams.subscribe((params) => {
      this.wValue = params['category'];
      if(this.wValue == undefined) this.wValue = 'KURTAS'
      this.service.getdata2(this.wValue).subscribe((data) => {
        this.products = data['data'];
      });
    });
  }

  addToCart(id) {
    console.log('generated if', id);
    id = parseInt(id);
    this.service.postCart(this.personName, this.wValue, id,this.group).subscribe(
      (data) => {
        console.log(data);
        alert('Added');
      },
      (error) => {
        alert(error['error']);
      }
    );
  }
  change(v) {
    this.service.getdata2(v.value).subscribe((data) => {
      this.products = data['data'];
    });
  }
}
