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

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  active() {
     this.playerentry$ = this.httpService.getRoster(this.teamName);
  }

}
