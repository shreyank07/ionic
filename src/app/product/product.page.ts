import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { computeStackId } from '@ionic/angular/directives/navigation/stack-utils';


@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  personName = "Vanshil"
  buttonArray = ['SMALL','MEDIUM','LARGE']
  id: any;
  data:any;
  category:any;
  side_img = [];
  main_img : string;
  name : string;
  subname : string;
  color : string;
  manufac : string;
  material : string;
  weight : string;
  price : string;
  constructor(
    private http: HttpClient,
    private activatedroute: ActivatedRoute,
    private service : UserService
  ) {}

  ngOnInit() {
    this.activatedroute.queryParams.subscribe((params) => {
      this.id = params['id']
      this.category = params['category']
    });
    this.service.getdata2(this.category).subscribe(data=>{
      this.data = data['data'][this.id]
      this.subname = this.data["subname"]
      this.name = this.data["name"]
      this.material = this.data["material"]
      this.weight = this.data["weight"]
      this.manufac = this.data["manufacturer"]
      this.price = this.data["price"]
      this.color = this.data["color"]
      this.side_img = this.data["img"]
      if (this.side_img!= undefined){
      this.main_img = this.side_img[0]
      }
      console.log(this.data)
    })

  }

  change(index){
    for(let i = 0 ; i<4; i++){
      document.getElementById(i.toString()).classList.remove("side_viewF")
    }
    console.log(index)
    this.main_img = this.side_img[index]
    document.getElementById(index).classList.add("side_viewF")
  }
  border(){
    let img = document.getElementById("view")
    console.log(img)
  
    img.className += "side_viewF"

  }
  addToCart(){
    
    console.log("hello")
    this.service.postCart(this.personName,this.category,parseInt(this.id)).subscribe(data => {
      alert("Added")
    },error=>{
      alert(error["error"])
    })
  }
}
