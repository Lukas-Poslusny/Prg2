import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users/users.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {UserCreateComponent} from './user-create/user-create.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'user/:id', component: UserDetailComponent},
  {path: 'userCreate', component: UserCreateComponent},
  {path: '**', redirectTo: 'users'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
