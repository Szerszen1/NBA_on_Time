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

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.playerentry$ = this.httpService.getRoster(this.teamName);
  }

}
