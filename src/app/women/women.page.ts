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
  wValue: string;
  products = [1,2,3,4,5,6,7,8]

  constructor(
    private service: UserService,
    private ActiveRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.ActiveRoute.queryParams.subscribe((params) => {
      this.wValue = params['category'];
      this.service.getdata2().subscribe((data) => {
        this.products = data['data'][0][this.wValue];
      });
    });
    console.log("helloTata")
  }

  navigator(cat: string) {
    this.router.navigate(['.'], {
      relativeTo: this.ActiveRoute,
      queryParams: { 'category': cat },
    });
  }

  navigator2(name:string, id:any){
    this.router.navigate(['product'] , {
      relativeTo : this.ActiveRoute,
      queryParams : {'category' : this.wValue,'name' : name , 'id' : id}
    })
  }

}
