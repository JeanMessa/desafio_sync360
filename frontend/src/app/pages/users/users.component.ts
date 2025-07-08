import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../types/User.type';
import { UserService } from '../../services/user.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [AsyncPipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users$! :Observable<User[]>;

  constructor(private userService: UserService){}

  ngOnInit(): void {
    console.log("a");
    this.list();
  }

  list(){
    this.users$ = this.userService.getAll();
  }

  calcAge(birthdate: Date){
    return this.userService.calcAge(birthdate);
  }


}
