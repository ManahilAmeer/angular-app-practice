import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit.component';
import { UserDetailComponent } from './user-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { HttpClientModule } from '@angular/common/http';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { RouterModule } from '@angular/router';
import { UserResolver } from './user-resolver.service';
import { UserEditGuard } from './user-edit.guard';

@NgModule({
  declarations: [UserListComponent, UserEditComponent, UserDetailComponent],
  imports: [
    RouterModule.forChild([
      {
        path: 'users',
        children: [
          { path: '', component: UserListComponent },
          {
            path: ':id',
            component: UserDetailComponent,
            resolve: { resolvedData: UserResolver },
          },
          {
            path: ':id/edit',
            component: UserEditComponent,
            resolve: { resolvedData: UserResolver },
            canDeactivate:[UserEditGuard]
          },
        ],
      },
    ]),
    CommonModule,
    LabelModule,
    InputsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    LayoutModule,
    GridModule,
    ButtonModule,
  ],
})
export class UserModule {}
