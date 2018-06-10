import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-bucks',
  templateUrl: './bucks.component.html',
  styleUrls: ['./bucks.component.css']
})
export class BucksComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'milwaukee-bucks';

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.playerentry$ = this.httpService.getRoster(this.teamName);
  }
}
