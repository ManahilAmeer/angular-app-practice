import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListComponent } from './users/user-list/user-list.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { DateInputsModule } from "@progress/kendo-angular-dateinputs"
import { UserDetailComponent } from './users/user-detail.component';
import { UserEditComponent } from './users/user-edit.component';
import { LoginComponent } from './user-management/login.component';
import { LabelModule } from "@progress/kendo-angular-label";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './user-management/signup.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { UserData } from './users/user-data';
import { MenuModule } from '@progress/kendo-angular-menu';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserEditComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    InputsModule,
    LayoutModule,
    LabelModule,
    DateInputsModule,  
    FormsModule,
    ReactiveFormsModule,
    GridModule,
    HttpClientInMemoryWebApiModule.forRoot(UserData),
    HttpClientModule,
    MenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
