import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-knicks',
  templateUrl: './knicks.component.html',
  styleUrls: ['./knicks.component.css']
})
export class KnicksComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'nyk';
  ny:string ='YEGfYsc8jlg';
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
