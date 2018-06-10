import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-bulls',
  templateUrl: './bulls.component.html',
  styleUrls: ['./bulls.component.css']
})
export class BullsComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'chicago-bulls';

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.playerentry$ = this.httpService.getRoster(this.teamName);
  }
}
