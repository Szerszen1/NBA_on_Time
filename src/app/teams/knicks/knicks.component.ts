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

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.playerentry$ = this.httpService.getRoster(this.teamName);
  }

}
