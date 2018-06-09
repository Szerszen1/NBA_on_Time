import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-philadelphia',
  templateUrl: './philadelphia.component.html',
  styleUrls: ['./philadelphia.component.css']
})
export class PhiladelphiaComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'phi';

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  active() {
     this.playerentry$ = this.httpService.getRoster(this.teamName);
  }

}
