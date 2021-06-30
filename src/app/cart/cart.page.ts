import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  totalPrice: number = 0;
  qty = [];
  name = 'Vanshil';
  userCart = [];
  catAindex: any;
  constructor(private service: UserService, private route: Router) {}
  ngOnInit() {
    this.service.getUserCart(this.name).subscribe((data) => {
      this.catAindex = data['data'];
      console.log(this.catAindex);

      this.catAindex.forEach((element) => {
        this.qty.push(element['qty']);
      });
      
      this.service.getDetailedCart(this.name).subscribe((data) => {
        this.userCart = data['data'];
        this.updatePrice();
      });

      console.log(this.qty);
    });

    // this.catAindex.forEach((element) => {
    //   console.log("Element is : ", element)
    //   this.service.getdata2(element['category']).subscribe((data2) => {
    //     let entry : object= data2['data'][element['id']]
    //     console.log("Entry is :", entry)
    //     this.userCart.push(entry);
    //     console.log(this.userCart)
    //     this.qty.push(1)
    //   });
    // });

    // for(let i : number =0 ; i<this.catAindex.length;i++){

    //   console.log("Executed")
    //   console.log(this.userCart)
    //   let entry : any
    //   console.log(this.catAindex[i])
    //   console.log("Main index is " , i)
    //   this.service.getdata2(this.catAindex[i]["category"]).subscribe(data2 => {
    //     console.log("helloooo")
    //     entry = data2['data']
    //     this.userCart.push(entry[this.catAindex[i]["id"]])
    //     // console.log("index is ", i)
    //     // console.log(data2['data'][this.catAindex[i]["id"]])
    //     // this.userCart.push(data2['data'][this.catAindex[i]["id"]])
    //   })
    // }
  }


  navigate(index, name) {
    console.log(index, name);
    this.route.navigate(['/women/product'], {
      queryParams: {
        category: this.catAindex[index]['category'],
        name: name,
        id: this.catAindex[index]['id'],
      },
    });
  }
  updatePrice() {
    for (let i = 0; i < this.qty.length; i++) {
      this.totalPrice += this.qty[i] * this.userCart[i]['price'];
    }
    console.log(this.totalPrice);
  }
  // test(index, value) {
  //   console.log(value);
  //   let i = parseInt(index);
  //   console.log(this.qty[i]);
  //   if (this.qty[i] != value) {
  //     console.log('changed');
  //   }
  //   this.totalPrice += (value - this.qty[i]) * this.userCart[index]['price'];
  //   console.log(this.totalPrice);
  // }
  updateQty(index){
    let i = parseInt(index)
    this.totalPrice += this.userCart[index]['price'];
    console.log(this.totalPrice);
    let but = document.getElementById("ok" + index.toString())
    but.style.display = "inline";
  }
  
  dissapear(index){
    let i = parseInt(index);
    this.service.updateQty(this.name , i , this.qty[index]).subscribe(data=>{
      console.log(data)
    })
    document.getElementById("ok" + index.toString()).style.display = "none";
  }

  remove(index){
    let i = parseInt(index)
    this.service.removeCart(this.name,i).subscribe(data=>{
      console.log(data)
      this.ngOnInit()
    })
  }
}


