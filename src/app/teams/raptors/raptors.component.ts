import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-raptors',
  templateUrl: './raptors.component.html',
  styleUrls: ['./raptors.component.css']
})
export class RaptorsComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'tor';

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  active() {
     this.playerentry$ = this.httpService.getRoster(this.teamName);
  }
}
