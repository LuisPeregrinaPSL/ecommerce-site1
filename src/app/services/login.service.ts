import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public showLoggedInMessage = new Subject<string>();


  constructor() { }

  setLoggedInUser(username: string) {
    this.showLoggedInMessage.next(username);
  }
}
