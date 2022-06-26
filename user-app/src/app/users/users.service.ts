import { Injectable } from '@angular/core';
import { User } from '../user-management/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private usersUrl = 'api/users/';
  constructor(private http: HttpClient) {}
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
  getUser(id: number): Observable<User | undefined> {
    if (id === 0) {
      return of(this.craeteEmptyUser());
    }
    return this.getUsers().pipe(
      map((users: User[]) => users.find((p) => p.id === id))
    );
  }
  getUserByEmail(email: string):Observable<User|undefined>{
    console.log(email)
    return this.getUsers().pipe(
      map((users: User[]) => users.find((p) => p.email === email))
    );
  }
  craeteEmptyUser(): User {
    return {
      id: 0,
      userName: '',
      email: '',
      password: '',
    };
  }
  addUser(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(this.usersUrl, user).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
  editUser(user: User): Observable<any> {
    return this.http.put(this.usersUrl + user.id, user).pipe(
      tap((data) => {
        console.log('User updated: ' + user.userName);
      }),
      catchError(this.handleError)
    );
  }
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.usersUrl + id).pipe(
      tap((data) => {
        console.log('User deleted: ' + id);
      }),
      catchError(this.handleError)
    );
  }
  private handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
