import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-pistons',
  templateUrl: './pistons.component.html',
  styleUrls: ['./pistons.component.css']
})
export class PistonsComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'det';

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  active() {
     this.playerentry$ = this.httpService.getRoster(this.teamName);
  }

}
