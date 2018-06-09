import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-hornets',
  templateUrl: './hornets.component.html',
  styleUrls: ['./hornets.component.css']
})
export class HornetsComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'cha';

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  active() {
     this.playerentry$ = this.httpService.getRoster(this.teamName);
  }

}
