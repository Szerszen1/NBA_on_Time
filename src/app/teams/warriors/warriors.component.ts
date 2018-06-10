import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-warriors',
  templateUrl: './warriors.component.html',
  styleUrls: ['./warriors.component.css']
})
export class WarriorsComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'gsw';
  gw:string ='jSVpSRjJY1E';
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
