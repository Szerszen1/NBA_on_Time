import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-grizzlies',
  templateUrl: './grizzlies.component.html',
  styleUrls: ['./grizzlies.component.css']
})
export class GrizzliesComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'mem';

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.playerentry$ = this.httpService.getRoster(this.teamName);
  }

}
