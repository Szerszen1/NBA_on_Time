import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  @Input()
  email: string;
  @Input()
  password: string;
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
