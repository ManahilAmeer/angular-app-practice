import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserData } from './users/user-data';
import { UserManagementModule } from './user-management/user-management.module';
import { UserModule } from './users/user.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    UserManagementModule,
    UserModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(UserData),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
