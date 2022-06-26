import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UsersService } from './users.service';
import { UserResolved } from '../user-management/user';
@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<UserResolved> {
  constructor(private userService: UsersService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<UserResolved> {
    const id = route.paramMap.get('id');
    if (isNaN(Number(id))) {
      const errMessage = `User id is not a Numbere: ${id}`;
      console.error(errMessage);
    }
    return this.userService.getUser(Number(id)).pipe(
      map((user) => ({ user })),
      catchError((error) => {
        const errMessage = `Error: ${error}`;
        console.log(errMessage);
        return of({ user: null, error: errMessage });
      })
    );
  }
}
