import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Teamentry } from '../models';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  easternAtlantic$: Observable<Teamentry[]>
  easternCentral$: Observable<Teamentry[]>
  easternSoutheast$: Observable<Teamentry[]>
  westernNorthwest$: Observable<Teamentry[]>
  westernPacific$:  Observable<Teamentry[]>
  westernSouthwest$:  Observable<Teamentry[]>

  constructor(private httpService: HttpService) { }

  /*Division number:
  0 = Eastern/Atlantic
  1 = Eastern/Central
  2 = Eastern/Southeast
  3 = Western/Northwest
  4 = Western/Pacific
  5 = Western/Southwest
  */

  ngOnInit() {
  }

  active() {
    this.easternAtlantic$ = this.httpService.getDivisionTeamStandings(0);
    this.easternCentral$ = this.httpService.getDivisionTeamStandings(1);
    this.easternSoutheast$ = this.httpService.getDivisionTeamStandings(2);
    this.westernNorthwest$ = this.httpService.getDivisionTeamStandings(3);
    this.westernPacific$ = this.httpService.getDivisionTeamStandings(4);
    this.westernSouthwest$ = this.httpService.getDivisionTeamStandings(5);
    return this.httpService.getDivisionTeamStandings(4).subscribe(results =>{
      console.log(results);
    })
  }

}
