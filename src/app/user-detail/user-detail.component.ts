import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService, IUserEntity} from '../users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: IUserEntity;
  newUsername: "";


  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly usersService: UsersService,
    private readonly router: Router
  ) {  }

  changeUser(id): void {
    this.usersService.changeUser(id, this.newUsername)
      .subscribe(user => this.router.navigateByUrl('/users'));
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(p => {
      const id = p.get('id');
      const idNum = parseInt(id, 10);
      this.usersService.getUserById(idNum)
        .subscribe(u => {
          if (u) {
            this.user = u;
          } else {
            this.router.navigateByUrl('/users');
          }
        },
          e => {
            console.log(e);
          }
        );
    });
  }

}
