import { GameScore } from './../models';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs/Observable';
import {FormBuilder, FormGroup} from '@angular/forms';

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

  public radioGroupForm: FormGroup;

  constructor(private httpService: HttpService , private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.radioGroupForm = this.formBuilder.group({
      'model1': ''
    });
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
    console.log(this.radioGroupForm.value['model1']);
    console.log(this.radioGroupForm.value['model1'] === 'playoff');
    if (this.radioGroupForm.value['model1'] === 'playoff') {
      this.season = '' + this.model.year + '-' + 'playoff';
    }
    if (this.radioGroupForm.value['model1'] === 'regular' && this.model.month > 8) {
      this.season = '' + this.model.year + '-' + (this.model.year + 1) + '-' + 'regular';
    }
    if (this.radioGroupForm.value['model1'] === 'regular' && this.model.month <= 8) {
      this.season = '' + ( this.model.year - 1 ) + '-' + this.model.year  + '-' + 'regular';
    }

    this.dateValid = '' + this.model.year + this.month + this.day;

    this.scoreBoard$ = this.httpService.getScoreboard(this.dateValid, this.season);
  }
   selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }
}
