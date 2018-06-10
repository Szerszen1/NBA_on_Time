import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-nuggets',
  templateUrl: './nuggets.component.html',
  styleUrls: ['./nuggets.component.css']
})
export class NuggetsComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'den';
  dn:string ='ktuqGT-J8GM';
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
