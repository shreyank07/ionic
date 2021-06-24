import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  id: any;
  data:any;
  category:any;
  constructor(
    private http: HttpClient,
    private activatedroute: ActivatedRoute,
    private service : UserService
  ) {}

  ngOnInit() {
    this.activatedroute.queryParams.subscribe((params) => {
      this.id = params['id']
      this.category = params['category']
      console.log(this.id);
    });
    this.service.getdata2().subscribe(data=>{
      this.data = data[this.category][this.id]
      console.log(this.data)
    })

  }
}
