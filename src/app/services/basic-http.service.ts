import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategories } from '../data-interfaces/categories.interface';
import { IUserRegisteredMessage } from '../data-interfaces/user/user-related-interfaces';

@Injectable()
export class BasicHttpService {
  constructor(private http: HttpClient) { }

  domain = 'http://localhost:3000';

  /*
  * get blog categories from db
  * */
  getCategories(): Observable<ICategories> {
    return this.http.get<ICategories>(this.domain + '/start/getcategories');
  }
  /*
  * Register user to the website
  * */
  registerUser(data): Observable<IUserRegisteredMessage> {
    return this.http.post<IUserRegisteredMessage>(this.domain + '/user/register', data);
  }
}
