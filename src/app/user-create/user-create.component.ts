import { Component, OnInit } from '@angular/core';
import {IUserEntity, UsersService} from '../users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  username = '';
  constructor(
    private readonly usersService: UsersService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
  }

  createUser(): void {
    this.usersService.createUser(this.username)
      .subscribe(user => this.router.navigateByUrl('/users'));
  }

}
