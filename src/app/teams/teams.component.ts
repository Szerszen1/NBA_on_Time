import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Rosterplayers, Playerentry } from '../models';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'bos';

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  getCos() {
    this.playerentry$ = this.httpService.getRoster(this.teamName);
  }


}

