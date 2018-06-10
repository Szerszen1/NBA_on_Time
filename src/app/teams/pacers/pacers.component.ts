import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-pacers',
  templateUrl: './pacers.component.html',
  styleUrls: ['./pacers.component.css']
})
export class PacersComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'ind';
  bc:string ='IeNdmbS8R4Q';
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
