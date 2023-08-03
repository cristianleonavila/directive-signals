import { Component, OnInit, inject, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user-request';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css']
})
export class UserInfoPageComponent implements OnInit {

  private userService = inject(UserService);
  public userId = signal(1);
  public currentUser = signal<User | undefined>(undefined);
  public userWasFound = signal(true);

  constructor() {}

  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  loadUser(id:number) {
    if ( id <= 0 ) return;

    this.userId.set( id );

    this.userService.getUserById( id ).subscribe( user => this.currentUser.set( user ) );
  }
}
