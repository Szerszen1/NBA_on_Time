import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-suns',
  templateUrl: './suns.component.html',
  styleUrls: ['./suns.component.css']
})
export class SunsComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'phx';

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  active() {
     this.playerentry$ = this.httpService.getRoster(this.teamName);
  }

}
