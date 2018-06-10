import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-thunder',
  templateUrl: './thunder.component.html',
  styleUrls: ['./thunder.component.css']
})
export class ThunderComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'okc';
  ot:string ='NTfDcv488Kk';
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
