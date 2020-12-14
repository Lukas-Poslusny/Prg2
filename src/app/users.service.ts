import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

export interface IUserEntity {
  id: number;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private nextId = 0;

  private users: IUserEntity[] = [];

  getAllUsers(): Observable<IUserEntity[]> {
    return of(this.users);
  }

  getUserById(id: number): Observable<IUserEntity> {
    let user: IUserEntity;
    for (const u of this.users) {
      if (id === u.id) {
        user = u;
        break;
      }
    }
    return of(user);
  }

  createUser(username: string): Observable<IUserEntity> {
    const id = ++this.nextId;
    const user = {id, username};
    this.users.push(user);
    return of(user);
  }

  changeUser(id: number, newUsername: string) {
    const user: IUserEntity = this.users.find(u => u.id === id);
    user.username = newUsername;
    if (this.users.find(u => u.id === id) != undefined){
      this.users.find(u => u.id === id);
    }
  }

}
