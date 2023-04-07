import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BuyRequest } from './models/Buys/buy-request';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:4300';
  // private apiUrl = 'http://yonesto.pythonanywhere.com';
  private version = "v1";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/${this.version}/store/product/info`);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }

  getPurchases(): Observable<any> {
    return this.http.get(`${this.apiUrl}/purchases`);
  }

  createBuy(buyRequest: BuyRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/${this.version}/store/buy/create/`, buyRequest)
  }
}
