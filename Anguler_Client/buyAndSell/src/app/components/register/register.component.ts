import { Component, OnInit } from '@angular/core';

import { UserService } from './../../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UserService],
})
export class RegisterComponent implements OnInit {

  showSuccessMsg: boolean;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.userService.postUser(form.value).subscribe(
      red => {
        this.showSuccessMsg = true;
      },
      err => {},
    );
  }

  resetForm(form: NgForm){
    this.userService.registerUser = {
      userName: '',
      email: '',
      password: '',
    }
  }

}
