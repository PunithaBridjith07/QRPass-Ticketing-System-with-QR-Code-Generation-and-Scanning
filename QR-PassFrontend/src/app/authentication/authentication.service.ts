import { HttpClient } from '@angular/common/http';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { user } from './authentication.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  readonly destroyRef = inject(DestroyRef)
  readonly httpClient = inject(HttpClient)

  constructor() { }

  //methodes
  loadUsers() {
    return this.fetchAuthenticationData('http://localhost:3000/users', 'Something went wrong on fetching already an users')
    
  }
  private fetchAuthenticationData(URL: string, ERROR: string) {
    return this.httpClient.get<{ users: user[] }>(URL).pipe(
      map((resData) => resData.users),
      catchError((error) => {
        return throwError(() => new Error(ERROR))
      })
    );
  }
}
