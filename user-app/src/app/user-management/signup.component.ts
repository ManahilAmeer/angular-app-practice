import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users/users.service';
@Component({
  selector: 'app-sigup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  pageTitle: string = 'Sign Up Form';
  errorMessage:string=""
  signupForm: FormGroup;
  users: User[] = [];
  public user: User;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UsersService
  ) {
    this.user = new User(0, '', '', '');
  }
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    this.userService.getUsers().subscribe({
      next: (users) => (this.users = users),
      error: (err) => console.log(err),
    });
  }
  onSubmit(): void {
    if(this.signupForm.valid){
      const user = new User(
        this.signupForm.value.id,
        this.signupForm.value.email,
        this.signupForm.value.userName,
        this.signupForm.value.password
      );
      if(this.users.find(p=>p.email===user.email)){
        this.errorMessage = 'A user with this email already exist.';
      }
      else{
        this.userService.addUser(user).subscribe((res) => {
          console.log(res);
        });
        this.router.navigate(['/users']);
      }
    }
    else{
      this.errorMessage = 'Please enter correct credentials.';
    }
  }
}
