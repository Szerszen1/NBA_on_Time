import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-nuggets',
  templateUrl: './nuggets.component.html',
  styleUrls: ['./nuggets.component.css']
})
export class NuggetsComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'den';

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  active() {
     this.playerentry$ = this.httpService.getRoster(this.teamName);
  }

}
