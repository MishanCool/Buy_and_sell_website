import { Component, OnInit } from '@angular/core';

import { UsersService } from './../../shared/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UsersService]
})
export class RegisterComponent implements OnInit {

  constructor(private usersService: UsersService ) { }

  ngOnInit() {
  }

}
