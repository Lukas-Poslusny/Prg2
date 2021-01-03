import {Injectable} from '@angular/core';
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
    console.log('User created.\n' + 'id: \'' + id + '\'\nusername: \'' + user.username + '\'');
    return of(user);
  }

  changeUser(id: number, newUsername: string): Observable<IUserEntity> {
    const user: IUserEntity = this.users.find(u => u.id === id);
    if (user.id === id) {
      console.log('Username changed.\nid: \'' + id + '\'\n' + 'username: \'' + user.username + '\' > \'' + newUsername + '\'');
      user.username = newUsername;
      return of(user);
    } else {
      console.log('No user found.\nid: \'' + id + '\'');
    }
  }

}
