import { Component, OnInit, ViewChild } from '@angular/core';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { User } from 'src/app/user-management/user';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
  pageTitle: string = 'Users List';
  user = {
    name: '',
    email:'',
    id: null
  }
  items:any[]=[
    { text: "User list"},{
      text:"Add user"
    }
  ]
  users: User[] = [];
  errorMessage: string;
  constructor(
    private userService: UsersService
  ) {}
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.userService
      .getUsers()
      .subscribe({
        next: (users) => (this.users = users),
        error: (err) => (this.errorMessage = err),
      });
  }
  resetValues() {
    this.user.name = "";
    this.user.email = "";
    this.user.id = null;
  }
}
