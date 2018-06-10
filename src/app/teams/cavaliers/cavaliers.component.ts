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
  cc: string = 'hfdOr3pb3u8';
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
