import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  /*Division number:
  1 =
  */

  ngOnInit() {
  }

  getCos1() {
    return this.httpService.getDivisionTeamStandings(0).subscribe(results => {
      console.log(results);
    });
  }
  getCos() {
    return this.httpService.getDivision().subscribe(results => {
      console.log(results);
    })
  }

}
