import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.page.html',
  styleUrls: ['./women.page.scss'],
})
export class WomenPage implements OnInit {

  constructor(private http:HttpClient, private service : UserService) { }
  ids = []
  ngOnInit() {
    this.service.getdata().subscribe(data=>{
      this.ids = 
    })
  }
  wValue:string = 'CLOTHING' ;

}
