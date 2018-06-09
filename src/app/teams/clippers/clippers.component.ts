import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-clippers',
  templateUrl: './clippers.component.html',
  styleUrls: ['./clippers.component.css']
})
export class ClippersComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'lac';

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  active() {
     this.playerentry$ = this.httpService.getRoster(this.teamName);
  }

}
