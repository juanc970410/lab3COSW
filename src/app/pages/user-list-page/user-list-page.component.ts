import{Component, OnInit}from '@angular/core';

import {UserService}from '../../services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})

export class UserListPageComponent implements OnInit{
    private users: User[] = [];

    constructor(public userService: UserService) {

  }

  ngOnInit() {
    this.users = this.userService.list();
  }
}