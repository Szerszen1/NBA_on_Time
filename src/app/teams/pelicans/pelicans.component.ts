import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playerentry } from '../../models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-pelicans',
  templateUrl: './pelicans.component.html',
  styleUrls: ['./pelicans.component.css']
})
export class PelicansComponent implements OnInit {

  playerentry$: Observable<Playerentry[]>;
  teamName = 'nop'; // do zmiany

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.playerentry$ = this.httpService.getRoster(this.teamName);
  }

}
