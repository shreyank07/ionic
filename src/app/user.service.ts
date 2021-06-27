import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private http: HttpClient) { }

  getdata(){
    return [
      {"name":"ShreyankLadekar","email":"Shreyank@autonise.com"}
    ]
  }
  getdata2(category){
    return this.http.get("http://127.0.0.1:8000/data" , {params : {'category' : category}})
  }

  getProductDetails(category){
    return this.http.get("http://127.0.0.1:8000/product", {params : {'category' : category}} )
  }


  }

 


