import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-wizards',
  templateUrl: './wizards.component.html',
  styleUrls: ['./wizards.component.css']
})
export class WizardsComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'was';

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  active() {
     this.playerentry$ = this.httpService.getRoster(this.teamName);
  }

}
