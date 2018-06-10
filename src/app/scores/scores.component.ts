import { GameScore } from './../models';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs/Observable';

const now = new Date();

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number};
  scoreBoard$:  Observable<GameScore[]>
  month: string;
  day: string;
  dateValid: string;
  season: string;


  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  active() {
    if (this.model.day < 10) {
      this.day = '0' + this.model.day;
    } else {
      this.day = '' + this.model.day;
    }
    if (this.model.month < 10) {
      this.month = '0' + this.model.month
    } else {
      this.month = '' + this.model.month
    }
    if (this.season === 'playoff') {
      this.season = '' + this.model.year + '-' + 'playoff';
    }
    if (this.season === 'regular' && this.model.month > 8) {
      this.season = '' + this.model.year + '-' + (this.model.year + 1) + '-' + 'regular';
    } else {
      this.season = '' + ( this.model.year - 1 ) + '-' + this.model.year  + '-' + 'regular';
    }

    this.dateValid = '' + this.model.year + this.month + this.day;

    this.scoreBoard$ = this.httpService.getScoreboard(this.dateValid);
  }
   selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }
}
