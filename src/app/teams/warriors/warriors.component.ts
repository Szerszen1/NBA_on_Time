import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-warriors',
  templateUrl: './warriors.component.html',
  styleUrls: ['./warriors.component.css']
})
export class WarriorsComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'gsw';

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.playerentry$ = this.httpService.getRoster(this.teamName);
  }

}
