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

  playerentry$: Playerentry[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  getCos() {
    this.httpService.get().subscribe(response => {
      this.playerentry$ = response;
      console.log(response);
    });
  }


}

