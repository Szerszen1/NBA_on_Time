import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-timberwolves',
  templateUrl: './timberwolves.component.html',
  styleUrls: ['./timberwolves.component.css']
})
export class TimberwolvesComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'min';
  mt:string ='lAHvS1nfpb8';
  player: YT.Player;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
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
