import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-timberwolves',
  templateUrl: './timberwolves.component.html',
  styleUrls: ['./timberwolves.component.css']
})
export class TimberwolvesComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'min';

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  active() {
     this.playerentry$ = this.httpService.getRoster(this.teamName);
  }

}
