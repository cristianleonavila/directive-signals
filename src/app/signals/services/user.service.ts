import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-request';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject( HttpClient );

  private url: string = 'https://reqres.in/api/users';

  constructor() { }

  getUserById( id:number): Observable<User> {
    return this.http.get<SingleUserResponse>(`${this.url}/${id}`).pipe(
      map( res => res.data),
      tap( console.log )
    );
  }
}
