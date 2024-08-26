import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serverUrl = 'http://localhost:4000'

  constructor(private http:HttpClient){ }


  // get all product api
  allProductApi(){
    return this.http.get(`${this.serverUrl}/all-product`)
  }

  // api to get a particular product
  getAproductApi(id:any){
    return this.http.get(`${this.serverUrl}/product/${id}`)
  }

  // api to register
  registerApi(reqBody:any){
    return this.http.post(`${this.serverUrl}/register`,reqBody)
  }

  // api to login
  loginApi(reqBody:any){
    return this.http.post(`${this.serverUrl}/login`,reqBody)
  }
}
