import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

//get product by id
//http://localhost:8080/product/id

//configure base url
const productRoute = '/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //make a new property
  url = environment.apiBaseUrl + productRoute;

  constructor(private http: HttpClient) {}

  //http://localhost:8080/products/
  //create a getAll functions for product service
  getAll(): Observable<Product[]> {
    let requestUrl = this.url + '/';
    return this.http.get<Product[]>(`${this.url}/`);
  }

  //http://localhost:8080/products/{id}
  getbyId(id: number): Observable<Product[]> {
    let requestUrl = this.url + '/' + id;
    return this.http.get<Product[]>(requestUrl);
  }

  //http://localhost:8080/products/
  createProduct(product: Product): Observable<Product[]> {
    return this.http.post<Product[]>(this.url, product);
  }

  //http://localhost:8080/products/{id}
  updateProduct(product: Product): Observable<Product[]> {
    let requestUrl = this.url + '/' + product.id;
    return this.http.put<Product[]>(requestUrl, product);
  }

  deleteById(id: number): Observable<Product[]> {
    let requestUrl = this.url + '/' + id;
    return this.http.delete<Product[]>(requestUrl);
  }
}
