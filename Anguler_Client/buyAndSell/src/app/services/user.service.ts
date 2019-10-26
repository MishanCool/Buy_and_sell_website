import { Injectable } from '@angular/core';

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

  constructor() { }
}
