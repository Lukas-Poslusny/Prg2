import { Component, OnInit } from '@angular/core';
import {UsersService, IUserEntity} from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: IUserEntity[] = [];

  constructor(
    private readonly userService: UsersService
  ) {
    userService.getAllUsers()
      .subscribe(
        u => this.users = u,
        e => console.log(e)
      );
  }

  ngOnInit(): void {
  }

}
