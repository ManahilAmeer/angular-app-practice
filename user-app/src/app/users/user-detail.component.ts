import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user-management/user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  pageTitle = 'User Detail';
  user: User | undefined;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getUser(id);
    }
  }
  getUser(id: number) {
    this.usersService.getUser(id).subscribe({
      next: (user) => (this.user = user),
      error: (err) => (this.errorMessage = err),
    });
  }
  onBack():void{
    this.router.navigate(['/users'])
  }
}
