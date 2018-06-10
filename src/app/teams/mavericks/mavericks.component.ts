import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-mavericks',
  templateUrl: './mavericks.component.html',
  styleUrls: ['./mavericks.component.css']
})
export class MavericksComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'dal'; // do zmiany
  dm:string ='BGGScU0gAIc';
  player: YT.Player;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  active() {
     this.playerentry$ = this.httpService.getRoster(this.teamName);
  }

  savePlayer (player) {
    this.player = player;
    console.log('player instance', player);
	}
  onStateChange(event) {
    console.log('player state', event.data);
  }

}
