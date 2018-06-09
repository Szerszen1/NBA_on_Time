import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-thunder',
  templateUrl: './thunder.component.html',
  styleUrls: ['./thunder.component.css']
})
export class ThunderComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'okc';

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  active() {
     this.playerentry$ = this.httpService.getRoster(this.teamName);
  }

}
