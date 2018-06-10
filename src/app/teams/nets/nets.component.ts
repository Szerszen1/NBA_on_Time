import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-nets',
  templateUrl: './nets.component.html',
  styleUrls: ['./nets.component.css']
})
export class NetsComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'bkn';
  bn:string ='TK-pQJT_nX0';
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
