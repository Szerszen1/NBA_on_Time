import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-suns',
  templateUrl: './suns.component.html',
  styleUrls: ['./suns.component.css']
})
export class SunsComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'phx';
  ps:string ='XrGXP73DAIM';
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
