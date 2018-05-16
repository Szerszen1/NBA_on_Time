import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  detailForm: FormGroup;

  constructor(public fb: FormBuilder, public auth: AuthService) { }

  ngOnInit() {
     this.detailForm = this.fb.group({
    'favoriteTeam': ['',  ]
    });
  }
  get favoriteTeam() { return this.detailForm.get('favoriteTeam') }

  setFavoriteTeam(user) {
    return this.auth.updateUser(user, { favoriteTeam:  this.favoriteTeam.value })
  }

}




