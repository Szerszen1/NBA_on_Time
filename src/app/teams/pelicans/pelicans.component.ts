import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-pelicans',
  templateUrl: './pelicans.component.html',
  styleUrls: ['./pelicans.component.css']
})
export class PelicansComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'nop'; // do zmiany
  np:string ='3JOyhiT6va8';
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
