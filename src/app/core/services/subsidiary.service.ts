import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';
import {Product} from '../model/product';
import {Subsidiary} from '../model/subsidiary';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class SubsidiaryService {

  private api: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getSubsidiarysList(): Observable<any> {
    return this.http.get<any>( `${this.api}/subsidiarys` );
  }

  deleteSubsidiary(id: string): Observable<any>{
    console.log('Este es el id:' + id);
    return this.http.delete(`${this.api}/subsidiarys/${id}`, {responseType: 'text'});
  }

  // tslint:disable-next-line:ban-types
  createSubsidiary(subsidiary: Object): Observable<Object> {
    return this.http.post(`${this.api}/subsidiarys`, subsidiary);
  }
  // tslint:disable-next-line:ban-types
  updateSubsidiary(id: string, subsidiary: Subsidiary): Observable<Object> {
    console.log('Id del objeto Editado: ', id);
    return this.http.put(`${this.api}/subsidiarys/${id}`, subsidiary);
  }
}
