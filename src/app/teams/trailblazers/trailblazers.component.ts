import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-trailblazers',
  templateUrl: './trailblazers.component.html',
  styleUrls: ['./trailblazers.component.css']
})
export class TrailblazersComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'por';

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  active() {
     this.playerentry$ = this.httpService.getRoster(this.teamName);
  }

}
