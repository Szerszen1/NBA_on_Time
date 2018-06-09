import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-celtics',
  templateUrl: './celtics.component.html',
  styleUrls: ['./celtics.component.css']
})
export class CelticsComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'bos';

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  active() {
     this.playerentry$ = this.httpService.getRoster(this.teamName);
  }

}
