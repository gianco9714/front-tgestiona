import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';
import {Product} from '../model/product';
import {User} from '../model/user';


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class UserService {

  private api: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getUsersList(): Observable<any> {
    return this.http.get<any>( `${this.api}/users` );
  }
  deleteUsers(id: string): Observable<any>{
    console.log('Este es el id:' + id);
    return this.http.delete(`${this.api}/users/${id}`, {responseType: 'text'});
  }
  // tslint:disable-next-line:ban-types
  createUser(user: Object): Observable<Object> {
    console.log('Este es el user:' + user);
    return this.http.post(`${this.api}/users`, user);
  }
  // tslint:disable-next-line:ban-types
  updateUser(id: string, user: User): Observable<Object> {
    console.log('Id del objeto Editado: ', id);
    return this.http.put(`${this.api}/users/${id}`, user);
  }
}
