import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-trailblazers',
  templateUrl: './trailblazers.component.html',
  styleUrls: ['./trailblazers.component.css']
})
export class TrailblazersComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'por';
  pb:string ='odYVgvG3XYA';
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
