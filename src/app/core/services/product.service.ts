import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';
import {Product} from '../model/product';


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class ProductService {

  private api: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getProductoList(): Observable<any> {
    return this.http.get<any>( `${this.api}/products` );
  }

  deleteProduct(id: string): Observable<any>{
    return this.http.delete(`${this.api}/products/${id}`, {responseType: 'text'});
  }

  // tslint:disable-next-line:ban-types
  createProduct(product: Object): Observable<Object> {
    return this.http.post(`${this.api}/products`, product);
  }

  // tslint:disable-next-line:ban-types
  updateProduct(id: string, product: Product): Observable<Object> {
    console.log('Id del objeto Editado: ', id);
    return this.http.put(`${this.api}/products/${id}`, product);
  }
}
