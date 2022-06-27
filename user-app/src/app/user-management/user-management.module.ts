import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
// import { LabelModule } from "@progress/kendo-angular-label";
import { LayoutModule } from '@progress/kendo-angular-layout';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
// import { InputsModule } from "@progress/kendo-angular-inputs";
@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ]),
    // AppRoutingModule,
    CommonModule,
    LabelModule,
    InputsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ButtonsModule,
  ],
})
export class UserManagementModule {}
