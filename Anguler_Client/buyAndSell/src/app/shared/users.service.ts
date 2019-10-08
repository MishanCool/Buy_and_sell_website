import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';

import { Users } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  selectedUser: Users; // users.model.ts file eke thiyana Users class eka
  users: Users[];


  constructor() { }
}
