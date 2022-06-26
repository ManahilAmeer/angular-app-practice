import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserEditComponent } from './user-edit.component';

@Injectable({
  providedIn: 'root',
})
export class UserEditGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: UserEditComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      console.log(component.isDirty)
    if (component.isDirty) {
      console.log()
      const userName = component.user.userName || 'New User';
      return confirm(`Navigate away and lose all changes to ${userName}?`);
    }
    return true;
  }
}
