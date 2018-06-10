import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-clippers',
  templateUrl: './clippers.component.html',
  styleUrls: ['./clippers.component.css']
})
export class ClippersComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'lac';
  lc:string ='rGkXapbta9Y';
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
