import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-spurs',
  templateUrl: './spurs.component.html',
  styleUrls: ['./spurs.component.css']
})
export class SpursComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'sas';
  ss:string ='MYeHuY6BTYk';
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
