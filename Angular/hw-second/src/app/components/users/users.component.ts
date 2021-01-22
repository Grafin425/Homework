import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private userServices: UserService) {
  }

  ngOnInit(): void {
    this.userServices.getAllUsers().subscribe(value => this.users = value);
  }

}
