import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users/users.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  pageTitle: string = 'User Login';
  users: User[] = [];
  user: User;
  errorMessage = '';
  public formModel: User;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UsersService
  ) {
    this.formModel = new User(0, '', '', '');
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    });
    this.getUsers();
  }
  getUsers() {
    this.userService.getUsers().subscribe({
      next: (users) => (this.users = users),
      error: (err) => console.log(err),
    });
  }
  checkUser(): void {
    if (this.loginForm.valid) {
      if (this.users.find((x) => x.email === this.loginForm.value.email)) {
        this.userService.getUserByEmail(this.loginForm.value.email).subscribe({
          next: (user) => (this.user = user),
        });
        // console.log(this.user)
        if (this.user.password === this.loginForm.value.password) {
          this.router.navigate(['/users']);
        } else {
          this.errorMessage = 'Incorrect Password.';
        }
      } else {
        this.errorMessage = 'No user with this E-mail found.';
      }
    } else {
      this.errorMessage = 'Please enter correct credentials.';
    }
  }
}
