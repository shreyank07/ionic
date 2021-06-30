import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getdata() {
    return [{ name: 'ShreyankLadekar', email: 'Shreyank@autonise.com' }];
  }
  getdata2(category) {
    return this.http.get('http://127.0.0.1:8000/data', {
      params: { category: category },
    });
  }

  getProductDetails(category) {
    return this.http.get('http://127.0.0.1:8000/product', {
      params: { category: category },
    });
  }

  getUserCart(name) {
    return this.http.get('http://127.0.0.1:8000/cart', {
      params: { name: name },
    });
  }
  postCart(name,category,id) {
    return this.http.post('http://127.0.0.1:8000/cart', {"category" : category , "id" : id, "qty" : 1}, {
      params: { name: name },
    });
  }

  getDetailedCart(name){
    return this.http.get('http://127.0.0.1:8000/cartDetails' , {params : {"name" : name}})
  }
  updateQty(name,index,qty){
    return this.http.post('http://127.0.0.1:8000/updateQty',{"quantity" : qty},{params : {"name" : name, "index" : index}})
  }

  removeCart(name,index){
    return this.http.get('http://127.0.0.1:8000/removeItem',{
      params : {"name" : name, "index" : index}
    })
  }
  
}
