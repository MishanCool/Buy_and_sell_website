import { Component, OnInit } from '@angular/core';

import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UserService],
})
export class RegisterComponent implements OnInit {

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
  }

}
