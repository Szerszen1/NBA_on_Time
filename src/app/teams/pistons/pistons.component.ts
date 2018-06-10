import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-pistons',
  templateUrl: './pistons.component.html',
  styleUrls: ['./pistons.component.css']
})
export class PistonsComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'det';
  dp:string ='rwyOxhF5QmQ';
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
