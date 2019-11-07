import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';

// model class
import { User } from './../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  registerUser: User = {
    userName: '',
    email: '',
    password: '',
};

  constructor(
    private http: HttpClient,
  ) { }

  postUser(user: User) {
    // return this.http.post(environment.apiBaseUrl + '/register' , user);
  }
}
