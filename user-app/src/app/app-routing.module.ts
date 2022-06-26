import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { LoginComponent } from './user-management/login.component';
import { SignupComponent } from './user-management/signup.component';
import { UserDetailComponent } from './users/user-detail.component';
import { UserEditComponent } from './users/user-edit.component';
import { UserEditGuard } from './users/user-edit.guard';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserResolver } from './users/user-resolver.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserDetailComponent,canDeactivate:[UserEditGuard] },
  { path: 'users/:id/edit', component: UserEditComponent,resolve:{user: UserResolver}},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
