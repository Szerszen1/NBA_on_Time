import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-nets',
  templateUrl: './nets.component.html',
  styleUrls: ['./nets.component.css']
})
export class NetsComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'bkn';

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  active() {
     this.playerentry$ = this.httpService.getRoster(this.teamName);
  }

}
