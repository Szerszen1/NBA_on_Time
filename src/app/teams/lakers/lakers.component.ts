import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-lakers',
  templateUrl: './lakers.component.html',
  styleUrls: ['./lakers.component.css']
})
export class LakersComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'lal';

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.playerentry$ = this.httpService.getRoster(this.teamName);
  }

}
