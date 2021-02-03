import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CanActivate, Router, RouterLinkActive} from '@angular/router';
import {admin} from '../../../db';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  username = new FormControl('', []);
  password = new FormControl('', []);
  form = new FormGroup({
    username: this.username,
    password: this.password
  });

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  auth(): void {
    if ((this.password.value === admin.password) && (this.username.value === admin.username)) {
      this.router.navigate(['home']);
    }
  }
}
