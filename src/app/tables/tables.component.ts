import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  getCos() {
    return this.httpService.getEasternAtlanticTeamStandings().subscribe(results => {
      console.log(results);
    });
  }

}
