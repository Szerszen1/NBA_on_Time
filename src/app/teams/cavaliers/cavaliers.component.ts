import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-cavaliers',
  templateUrl: './cavaliers.component.html',
  styleUrls: ['./cavaliers.component.css']
})
export class CavaliersComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'cleveland-cavaliers';

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  active() {
     this.playerentry$ = this.httpService.getRoster(this.teamName);
  }

}
