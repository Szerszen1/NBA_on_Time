import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-hawks',
  templateUrl: './hawks.component.html',
  styleUrls: ['./hawks.component.css']
})
export class HawksComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'atl';
  hw:string ='-2VYkhfn87g';
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
