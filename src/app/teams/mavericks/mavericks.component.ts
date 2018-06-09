import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-mavericks',
  templateUrl: './mavericks.component.html',
  styleUrls: ['./mavericks.component.css']
})
export class MavericksComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'dal'; // do zmiany

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  active() {
     this.playerentry$ = this.httpService.getRoster(this.teamName);
  }

}
