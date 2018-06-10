import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-raptors',
  templateUrl: './raptors.component.html',
  styleUrls: ['./raptors.component.css']
})
export class RaptorsComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'tor';
  tr:string ='2vbdjj6U__0';
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
