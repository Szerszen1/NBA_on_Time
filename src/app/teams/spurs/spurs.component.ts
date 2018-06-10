import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-spurs',
  templateUrl: './spurs.component.html',
  styleUrls: ['./spurs.component.css']
})
export class SpursComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'sas';

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.playerentry$ = this.httpService.getRoster(this.teamName);
  }
}
