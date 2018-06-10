import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-heat',
  templateUrl: './heat.component.html',
  styleUrls: ['./heat.component.css']
})
export class HeatComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'mia';

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.playerentry$ = this.httpService.getRoster(this.teamName);
  }
}
