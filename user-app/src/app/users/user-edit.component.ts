import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserResolved } from '../user-management/user';
import { UsersService } from './users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  pageTitle = 'Edit Form';
  buttonText: string = '';
  showDelButton: boolean = false;
  user: User;
  errorMessage: string;
  editForm: FormGroup;
  get isDirty(): boolean {
    return JSON.stringify(this.user) === JSON.stringify(this.editForm.value);
  }
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) {}
  ngOnInit(): void {
    // console.log()
    this.route.data.subscribe((data)=>{
      const resolvedUser: UserResolved = data['resolvedData'];
      this.errorMessage = resolvedUser.error;
      this.onUserFetched(resolvedUser.user);
    })
    this.editForm = this.fb.group({
      id: [],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      userName: ['', [Validators.required]],
    });
    this.editForm.patchValue(this.user);
  }
  onUserFetched(user: User): void {
    this.user = user;
    if (this.user.id === 0) {
      this.pageTitle = 'Add Product';
      this.buttonText = 'Add';
      this.showDelButton = false;
    } else if (!this.user) {
      this.pageTitle = 'No User with this ID';
    } else {
      this.pageTitle = `Edit Form for ${user.userName}`;
      this.buttonText = 'Edit';
      this.showDelButton = true;
    }
  }
  handleButton() {
    if (this.buttonText === 'Add') {
      this.addUser();
    } else if (this.buttonText === 'Edit') {
      this.editUser();
    }
  }
  addUser() {
    console.log('User: ' + this.user.userName);
    const user = new User(
      this.editForm.value.id,
      this.editForm.value.email,
      this.editForm.value.userName,
      this.editForm.value.password
    );
    if(this.editForm.valid){
      this.usersService.addUser(user).subscribe((res) => {
        console.log(res);
      });
      this.onBack();
    }
    else{
      this.errorMessage = 'Please enter correct credentials.';
    }
  }
  editUser(): void {
    if (this.user.id === 0) {
    } else {
      this.usersService.editUser(this.editForm.value).subscribe(
        (res) => {
        },
        (err) => {
          console.log('handle error');
          console.log(err);
        }
      );
      this.onBack();
    }
  }
  deleteUser(): void {
    if (
      confirm(
        `The user ${this.user.userName} will be permanently removed. Are you sure you wnat to delete?`
      )
    ) {
      this.usersService.deleteProduct(this.user.id).subscribe({
        next: () => {
          this.router.navigate(['/users']);
        },
        error: (err) => {
          console.log('Error occured ' + err);
        },
      });
    }
  }
  onBack(): void {
    this.router.navigate(['/users']);
  }
  log(data) {
    console.log(data);
  }
}
