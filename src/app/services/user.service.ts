import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName: any;
  constructor() { this.getUserData(); }

  storeUserData(userEmail: any) {
    this.userName = userEmail;
    localStorage.setItem("userName", userEmail);
  }

  getUserData() {
    this.userName = localStorage.getItem("userName");
  }
}
